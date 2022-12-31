const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  age: { type: Number, required: [true, "Age is required"] },
  status: {
    type: String,
    enum: ["active", "non active"],
    default: "non active",
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
