const router = require("express").Router();
const passport = require("passport");
const { User } = require("../../models")

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.get("/register", (req, res) => {
  res.render("register.handlebars");
});

router.post("/register", async (req, res) => {
  try {
    
    let userData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      user_id: req.body.user_id
      
    });
    console.log(userData);
    res.json("Success!");
  } catch (error) {
    res.json(error);
    console.log(error);
  }
});

router.post("/logout", (req, res) => {
  
  req.logOut();
  res.redirect("/login");
});

module.exports = router;
