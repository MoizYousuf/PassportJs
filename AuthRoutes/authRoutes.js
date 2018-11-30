const router = require("express").Router();
const passport = require("passport");

router.get("/logout", (req, res) => {
  res.send("You now logging out");
});

router.get("/login", (req, res) => {
  res.render("login");
});
// auth with google

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

// callback route for google to redirect to

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send("you reached the callback URL");
});

module.exports = router;
