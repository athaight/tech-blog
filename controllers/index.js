const router = require('express').Router();

const api = require('./api');
const homeRoute = require('./home');

router.use('/', homeRoute);
router.use('./api', api);

module.exports = router;