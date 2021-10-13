const router = require("express").Router();
const withAuth = require("../utils/withAuth");
const { User, Post, Comment } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: Comment }, { model: User }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    const commentData = await Comment.findAll({
      include: [{ model: User }],
    });
    const comments = commentData.map((comment) => comment.toJSON());
    console.log(posts);

    res.render("home", { posts, comments });
  } catch (error) {
    console.log(error);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  res.render("dashboard");
});
router.get("/login", async (req, res) => {
  res.render("login");
});
router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;
