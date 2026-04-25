import server from '../dist/server/server.js';

export default async function handler(request, response) {
  try {
    const protocol = request.headers['x-forwarded-proto'] || 'http';
    const host = request.headers.host;
    const url = new URL(request.url, `${protocol}://${host}`);

    const webRequest = new Request(url.href, {
      method: request.method,
      headers: request.headers,
      body: ['POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method) ? JSON.stringify(request.body) : undefined
    });

    const res = await server.fetch(webRequest);
    
    // Copy headers more safely
    for (const [key, value] of res.headers.entries()) {
      response.setHeader(key, value);
    }
    
    response.status(res.status);
    
    const body = await res.text();
    response.send(body);
  } catch (error) {
    response.status(500).send(`Server Error: ${error.message}\n${error.stack}`);
  }
}
