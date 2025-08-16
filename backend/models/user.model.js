const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  avatar: { type: String }, // optional profile picture
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
