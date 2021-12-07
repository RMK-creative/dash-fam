const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/feed", (req, res) => {
  res.render("feed");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.listen(3080, () => {
  console.log("server is running");
});
