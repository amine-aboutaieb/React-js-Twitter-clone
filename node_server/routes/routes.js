const express = require('express');
const router = express.Router();
const UserRoutes = require('./user');
const PostRoutes = require('./post');

router.use(UserRoutes);
router.use(PostRoutes);



module.exports = router;