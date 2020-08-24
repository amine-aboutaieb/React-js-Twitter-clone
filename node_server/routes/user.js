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

router.get('/logout',(req,res)=>{
    UserController.logout(req,res);
});

module.exports = router;