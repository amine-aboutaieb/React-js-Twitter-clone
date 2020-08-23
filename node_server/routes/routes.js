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
    console.log(req.session);
    console.log(req.sessionID);
    if(req.session.AuthData){
        res.json({status : true,AuthData : req.session.AuthData});
    }else{
        res.json({status : false});
    }
});

module.exports = router;