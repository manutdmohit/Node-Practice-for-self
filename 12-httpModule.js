const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page');
  }
  if (req.url === '/about') {
    res.end('Welcome to our about page');
  }
  if (req.url === '/contact') {
    res.end('Welcome to our contact page');
  }

  res.end(`<h1>The webpage you are looking is not available</h1>
  <a href="/">Back Home </a>`);
});

server.listen(8000, console.log('The server is running on port 8000'));
