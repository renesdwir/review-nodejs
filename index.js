const http = require("node:http");
const newModule = require("./testModule");
const { faker } = require("@faker-js/faker");

const randomName = faker.name.jobTitle();
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(randomName);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
