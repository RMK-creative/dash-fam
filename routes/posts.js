const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

router.post("/createPost", postsController.createPost);
router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
