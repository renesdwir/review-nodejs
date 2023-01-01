const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const connection = require("./connection");
const User = require("./UserModel");
const mongoose = require("./mongoose");

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send({ data: users });
  } catch (error) {
    res.send({ message: error.message || "Internal Server Error" });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.send({ mesage: "Invalid user id" });
    }
    const users = await User.findById(id);
    console.log(users);
    if (users) {
      res.send({ data: users });
    } else {
      res.send({ mesage: "User not found !" });
    }
  } catch (error) {
    console.log(error);
    res.send({ message: error.message || "Internal Server Error" });
  }
});

router.post("/users", async (req, res) => {
  try {
    const { name, age, status } = req.body;
    const newUser = await User.create({
      name,
      age,
      status,
    });
    res.send({ data: newUser, message: "Users created successfully" });
  } catch (error) {
    console.log(error.message);
    res.send({ message: error.message || "Internal Server Error" });
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, status } = req.body;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.send({ mesage: "Invalid user id" });
    }
    const updateUser = await User.updateOne(
      { _id: id },
      {
        name,
        age,
        status,
      },
      { runValidators: true }
    );

    if (updateUser.modifiedCount === 1 || updateUser.matchedCount === 1) {
      res.send({ data: updateUser, message: "Users updated successfully" });
    } else {
      res.send({ message: "User not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.send({ message: error.message || "Internal Server Error" });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.send({ mesage: "Invalid user id" });
    }
    const deleteUser = await User.deleteOne({ _id: id });
    if (deleteUser.deletedCount === 1) {
      res.send({ data: deleteUser, message: "User deleted successfully" });
    } else {
      res.send({ message: "User not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.send({ message: error.message || "Internal Server Error" });
  }
});

// router.get("/users", async (req, res) => {
//   try {
//     console.log(connection);
//     if (connection) {
//       const db = connection.db();
//       const users = await db.collection("users").find().toArray();
//       res.send({ data: users });
//     } else {
//       res.send({ message: "Connection database failed" });
//     }
//   } catch (error) {
//     res.send({ message: error.message || "Internal Server Error" });
//   }
// });
// router.post("/users", async (req, res) => {
//   try {
//     const { name, age, status } = req.body;
//     console.log(name, age, status);
//     if (connection) {
//       const db = connection.db();
//       const users = await db
//         .collection("users")
//         .insertOne({ name, age, status });
//       console.log("USERS >>>>", users);
//       if (users.insertedId) {
//         res.send({ message: "Data saved successfully" });
//       } else {
//         res.send({ message: "Save data failed" });
//       }
//     } else {
//       res.send({ message: "Connection database failed" });
//     }
//   } catch (error) {
//     res.send({ message: error.message || "Internal Server Error" });
//   }
// });
// router.put("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, age, status } = req.body;
//     if (connection) {
//       const db = connection.db();
//       const users = await db.collection("users").updateOne(
//         { _id: ObjectId(id) },
//         {
//           $set: {
//             name,
//             age,
//             status,
//           },
//         }
//       );
//       console.log("<<<<", users);
//       if (users.modifiedCount === 1) {
//         res.send({ message: "Data edited successfully" });
//       } else {
//         res.send({ message: "Edit data failed" });
//       }
//     } else {
//       res.send({ message: "Connection database failed" });
//     }
//   } catch (error) {
//     res.send({ message: error.message || "Internal Server Error" });
//   }
// });
// router.delete("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (connection) {
//       const db = connection.db();
//       const users = await db
//         .collection("users")
//         .deleteOne({ _id: ObjectId(id) });
//       console.log(users);
//       if (users.deletedCount === 1) {
//         res.send({ message: "Data deleted successfully" });
//       } else {
//         res.send({ message: "Delete data failed" });
//       }
//     } else {
//       res.send({ message: "Connection database failed" });
//     }
//   } catch (error) {
//     res.send({ message: error.message || "Internal Server Error" });
//   }
// });

module.exports = router;
