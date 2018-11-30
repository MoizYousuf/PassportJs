const express = require("express");
const authRoutes = require("./AuthRoutes/authRoutes");
const passportSetup = require("./config/passport-setup");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");

const port = 3000;
const app = express();

// setup view engine
app.set("view engine", "ejs");

//setup cookieSession

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

// initialize passport

app.use(passport.initialize());
app.use(passport.session());

// connet to mongodb

mongoose.connect(
  keys.mongodb.dbURI,
  () => {
    console.log("connected to mongodb");
  }
);

// setup router

app.use("/auth", authRoutes);

// create home diroctory
app.get("/", (req, res) => {
  res.render("home");
});

// app listen port
app.listen(port, () => {
  console.log("The server is listening port ", port);
});
