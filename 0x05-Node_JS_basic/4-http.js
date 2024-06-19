const http = require('http');

const app = http.createServer();

app.on('request', (_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.setHeader('Content-Length', 23);
  res.write('Hello Holberton School!');
});

app.listen(1245, 'localhost', () => {
  process.stdout.write('Server running at http://localhost:1245/*\n');
});

module.exports = app;
