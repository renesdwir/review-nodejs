const express = require("express");
const router = express.Router();
const connection = require("./connection");

router.get("/users", async (req, res) => {
  try {
    console.log(connection);
    if (connection) {
      const db = connection.db();
      const users = await db.collection("users").find().toArray();
      res.send({ data: users });
    } else {
      res.send({ message: "Connection database failed" });
    }
  } catch (error) {
    res.send({ message: error.message || "Internal Server Error" });
  }
});
router.post("/users", async (req, res) => {
  try {
    const { name, age, status } = req.body;
    console.log(name, age, status);
    if (connection) {
      const db = connection.db();
      const users = await db
        .collection("users")
        .insertOne({ name, age, status });
      console.log("USERS >>>>", users);
      if (users.insertedId) {
        res.send({ message: "Data saved successfully" });
      } else {
        res.send({ message: "Save data failed" });
      }
    } else {
      res.send({ message: "Connection database failed" });
    }
  } catch (error) {
    res.send({ message: error.message || "Internal Server Error" });
  }
});

module.exports = router;
