const http = require('http');

http.createServer((req, res) => {
  res.end("🚀 DevOps from VS Code!");
}).listen(3000);