const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers");

const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(myLogger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
