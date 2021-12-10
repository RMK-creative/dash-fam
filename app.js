const express = require("express");
const app = express();
const connectDB = require("./config/database");
const methodOverride = require("method-override");

require("dotenv").config({ path: "./config/.env" });

connectDB();

// view engine
app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.static("public"));
app.use(methodOverride("_method"));

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES

app.use("/", require("./routes/main"));
app.use("/post", require("./routes/posts"));

const PORT = process.env.PORT || 3050;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
