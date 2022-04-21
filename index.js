const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const testcase = require('./testcase.js');

const server = http.createServer(async (req, res) => {
  const ret = await testcase.myGuiTest();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'html');
  res.end(ret);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});