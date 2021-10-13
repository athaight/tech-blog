const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.get("/", (req, res) => {
  res.render("register.handlebars");
});

router.post("/", passport.authenticate("local-register"), function (req, res) {
  res.json(req.user);
});

module.exports = router;