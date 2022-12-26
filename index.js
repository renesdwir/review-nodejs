const http = require("node:http");
const newModule = require("./testModule");
const { faker } = require("@faker-js/faker");

const randomName = faker.name.fullName();
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  if (url === "/") res.end("Selamat datang");
  if (url === "/users") res.end(randomName);
  else res.end("default message");
  console.log(url);
  //res.end(randomName);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
