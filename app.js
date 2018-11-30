const express = require("express");
const authRoutes = require("./AuthRoutes/authRoutes")
const passportSetup = require("./config/passport-setup")

const port = 3000;
const app = express();

// setup view engine
app.set("view engine", "ejs");

// setup router

app.use('/auth', authRoutes)

// create home diroctory
app.get("/", (req, res) => {
  res.render("home");
});

// app listen port
app.listen(port, () => {
  console.log("The server is listening port ", port);
});
