const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const upload = require("../middleware/multer");

router.post("/createPost", upload.single("file"), postsController.createPost);
router.put("/likePost/:id", postsController.likePost);
router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
