const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true }, // UUID
  host: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  currentTrack: { type: mongoose.Schema.Types.ObjectId, ref: "Track" },
  playbackState: {
    isPlaying: { type: Boolean, default: false },
    position: { type: Number, default: 0 }, // in seconds
    lastSynced: { type: Date }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Room", roomSchema);
