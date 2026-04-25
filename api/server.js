import server from '../dist/server/server.js';

export default async function handler(request, response) {
  try {
    const res = await server.fetch(request);
    
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
