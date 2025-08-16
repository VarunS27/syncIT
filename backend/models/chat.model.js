const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  roomId: { type: String, required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  sentAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Chat", chatSchema);
