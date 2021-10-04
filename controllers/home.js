const router = require('express').Router();
const withAuth = require("../utils/withAuth");

router.get('/', withAuth, async (req, res) => {
    res.render('homepage');
});
router.get('/dashboard', withAuth, async (req, res) => {
    res.render('dashboard');
});
router.get('/login', async (req, res) => {
    res.render('login');
});
router.get('/signup', async (req, res) => {
    res.render('signup');
});

module.exports = router;