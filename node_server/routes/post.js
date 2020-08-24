const express = require('express');
const router = express.Router();
const PostController = require('../controllers/post');


router.post('/post',(req,res)=>{
    PostController.post(req,res);
});

router.get('/getMePosts',(req,res)=>{
    PostController.getMePosts(req,res);
});




module.exports = router;