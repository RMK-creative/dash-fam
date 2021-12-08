const Post = require("../models/Post");

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: -1 });
      res.render("feed.ejs", {
        posts: posts,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getProfile: (req, res) => {
    res.render("profile.ejs");
  },
};
