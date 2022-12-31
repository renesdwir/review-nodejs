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

(async () => {
  const users = await User.findOne({ _id: "63aee8a6fefca5a64b7cee17" });
  console.log(users);
})();

// silence.save((err, result) => {
//   if (err) return console.log(err);
//   return console.log(result);
// });
