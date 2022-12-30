const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/animals", (err, client) => {
  if (err) throw err;
  console.log("db connected");
  //   const db = client.db("animals");

  //   db.collection("mammals")
  //     .find()
  //     .toArray((err, result) => {
  //       if (err) throw err;

  //       console.log(result);
  //     });
});
