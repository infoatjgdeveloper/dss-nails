import server from '../dist/server/server.js';

export const config = {
  api: {
    bodyParser: false,
  },
};

const SKIP_RES_HEADERS = new Set([
  'content-length',
  'transfer-encoding',
  'connection',
  'keep-alive',
]);

export default async function handler(req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const url = new URL(req.url, `${protocol}://${host}`);

    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value === undefined) continue;
      if (Array.isArray(value)) {
        for (const v of value) headers.append(key, v);
      } else {
        headers.set(key, value);
      }
    }

    let body;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
      }
      if (chunks.length > 0) body = Buffer.concat(chunks);
    }

    const webRequest = new Request(url.href, {
      method: req.method,
      headers,
      body,
      duplex: 'half',
    });

    const response = await server.fetch(webRequest);

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      if (!SKIP_RES_HEADERS.has(key.toLowerCase())) {
        res.setHeader(key, value);
      }
    });

    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(Buffer.from(value));
      }
    }
    res.end();
  } catch (error) {
    console.error('SSR handler error:', error);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader('content-type', 'text/plain; charset=utf-8');
    }
    res.end(`Server Error: ${error?.message || 'unknown error'}`);
  }
}
