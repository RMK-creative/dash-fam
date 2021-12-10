const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
// const { result } = require("lodash");

module.exports = {
  createPost: async (req, res) => {
    try {
      await Post.create({
        text: req.body.newPost,
        likes: 0,
      });
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },
  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { likes: 1 } }
      );
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      let post = await Post.findById({ _id: req.params.id });
      await Post.deleteOne({ _id: req.params.id });
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },
};
