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

module.exports = router;
