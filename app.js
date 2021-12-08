const express = require("express");
const app = express();
const connectDB = require("./config/database");

require("dotenv").config({ path: "./config/.env" });

connectDB();

// view engine
app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.static("public"));

// ROUTES
app.use("/post/createPost", require("./routes/posts"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/feed", (req, res) => {
  res.render("feed");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

const PORT = process.env.PORT || 3050;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
