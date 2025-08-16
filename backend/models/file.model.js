const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  url: { type: String, required: true }, // S3/local file link
  duration: { type: Number, required: true }, // in seconds
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Track", trackSchema);
