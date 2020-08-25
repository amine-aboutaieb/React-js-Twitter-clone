const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user');



router.post('/register',(req,res)=>{
    UserController.register(req,res);
});

router.post('/login',(req,res)=>{
    UserController.login(req,res);
});


router.get('/checkAuth',(req,res)=>{
    UserController.checkAuth(req,res);
});

router.post('/logout',(req,res)=>{
    UserController.logout(req,res);
});

router.get('/searchUsers/:username',(req,res)=>{
    UserController.searchUsers(req,res);
});

router.get('/getProfile/:username',(req,res)=>{
    UserController.getProfile(req,res);
});

module.exports = router;