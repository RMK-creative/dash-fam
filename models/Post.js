const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  image: {
    type: String,
  },
  cloudinaryID: {
    type: String,
  },
  likes: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
