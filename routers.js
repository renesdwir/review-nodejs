const express = require("express");
const router = express.Router();
//https://expressjs.com/en/guide/using-middleware.html
const middleware = function (req, res, next) {
  console.log("ini middleware");
  next();
};
router.get("/", middleware, (req, res) => {
  res.send("Hello World!");
});
router.get("/user/:id", middleware, (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (id === "1") {
    res.send({ id: 1, name: "renes aja", age: 20 });
  } else if (id === "2") {
    res.send({ id: 2, name: "dwi", age: 21 });
  } else {
    res.send("No data can be display");
  }
});
router.get("/user", middleware, (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  if (name && age) res.send(`Hai ${name}, aku tebak umurmu ${age} tahun`);
  else {
    res.send("something wrong");
  }
});
router.post("/user", middleware, (req, res) => {
  res.send("Got a POST request");
});
router.put("/user", middleware, (req, res) => {
  res.send("Got a PUT request at /user");
});
router.delete("/user", middleware, (req, res) => {
  res.send("Got a DELETE request at /user");
});

module.exports = router;
