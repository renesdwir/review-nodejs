const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/user/:id", (req, res) => {
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
app.post("/user", (req, res) => {
  res.send("Got a POST request");
});
app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});
app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
