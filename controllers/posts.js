const Post = require("../models/Post");
const cloudinary = require("../middleware/cloudinary");

module.exports = {
  createPost: async (req, res) => {
    try {
      // upload img to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        text: req.body.newPost,
        image: result.secure_url,
        cloudinaryId: result.public_id,
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
