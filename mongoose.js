// getting-started.js
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/db_latihan");
  console.log("Listening Database ...");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//get all data
// (async () => {
//   const users = await User.find();
//   console.log(users);
// })();

//findone
// (async () => {
//   const users = await User.findOne({ _id: "63aee8a6fefca5a64b7cee17" });
//   console.log(users);
// })();

//post
// (async () => {
//   const newUser = await User.create({ name: "jannah", age: "20" });
//   console.log(newUser);
// })();

//post with save()
// (async () => {
//   const newUser = new User();
//   newUser.name = "Joko";
//   newUser.age = 30;
//   const insert = await newUser.save();

//   console.log(insert);
// })();

//update
// (async () => {
//   const updateUser = await User.updateOne(
//     { _id: "63b050599c88e5f2c8998366" },
//     {
//       name: "Joko Tingkir",
//     }
//   );
//   console.log(updateUser);
// })();

//update with save()
// (async () => {
//   const updateUser = await User.findById("63b050599c88e5f2c8998366");
//   updateUser.name = "Joko Kendil";
//   const update = await updateUser.save();
//   console.log(update);
// })();

//Delete
// (async () => {
//   const deleteUser = await User.deleteOne({ _id: "63b050599c88e5f2c8998366" });
//   console.log(deleteUser);
// })();
