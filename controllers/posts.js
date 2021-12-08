const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
// const { result } = require("lodash");

module.exports = {
  createPost: async (req, res) => {
    try {
      await Post.create({
        text: req.body.text,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        likes: 0,
        user: req.user.id,
      });
      console.log("New post added");
      res.redirect("/feed");
    } catch (error) {
      console.log(err);
    }
  },
};
