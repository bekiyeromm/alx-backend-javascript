/**
 * creating Simple HTTP server using nodejs
 */
const http = require('node:http');

const host = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, resp) => {
  resp.writeHead(200, { 'Content-Type': 'text/plain' });
  resp.end('Hello Holberton School!');
});

app.listen(port, host, () => {
  console.log(`Server is live, running at http://${host}:${port}`);
});

module.exports = app;
