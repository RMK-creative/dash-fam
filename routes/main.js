const express = require("express");
const main = require("../controllers/main");
const router = express.Router();
const mainController = require("../controllers/main");

router.get("/", mainController.getIndex);
router.get("/feed", mainController.getFeed);
router.get("/profile", mainController.getProfile);

module.exports = router;
