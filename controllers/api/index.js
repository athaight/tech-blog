const router = require('express').Router();
const userRoute = require('./user');
// const postRoute = require('./post');
// const commentRoute = require('./comments');

router.use('/user', userRoute);
// router.use('/post', postRoute);
// router.use('/comments', commentRoute);

module.exports = router;