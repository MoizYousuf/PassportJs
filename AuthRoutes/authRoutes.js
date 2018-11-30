const router = require("express").Router();

router.get("/logout", (req, res) => {
  res.send("You now logging out");
});

router.get("/login", (req, res) => {
    res.render('login');
})

router.get("/google", (req, res) => {
    res.send("You are now login in google+")
});

module.exports = router;