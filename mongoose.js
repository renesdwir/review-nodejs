// getting-started.js
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/db_latihan");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  status: {
    type: String,
    enum: ["active", "non active"],
    default: "non active",
  },
});

const User = mongoose.model("User", userSchema);
//findone
// (async () => {
//   const users = await User.findOne({ _id: "63aee8a6fefca5a64b7cee17" });
//   console.log(users);
// })();

//post
// (async () => {
//   const newUser = await User.create({
//     name: "Nabila",
//     age: 20,
//     status: "active",
//   });
//   console.log(newUser);
// })();

//post
(async () => {
  const newUser = new User();
  newUser.name = "Joko";
  newUser.age = 30;
  const insert = await newUser.save();

  console.log(insert);
})();
