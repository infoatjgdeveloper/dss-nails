import server from '../dist/server/server.js';

export default async function handler(request, response) {
  const res = await server.fetch(request);
  
  // Copy headers
  res.headers.forEach((value, key) => {
    response.setHeader(key, value);
  });
  
  response.status(res.status);
  
  const body = await res.text();
  response.send(body);
}
