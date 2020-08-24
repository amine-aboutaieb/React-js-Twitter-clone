const UserModel = require('../models/user');


module.exports = {
    register : (req,res)=>{
        let data = req.body;
        if(data.fName !== "" && data.lName !== "" && data.age !== "" && data.uName !== "" && data.email !== "" && data.pwd !== ""){
            UserModel.checkEmailAndUsername(data.email,data.uName).then((result)=>{
                if(result.email === false && result.username === false){
                    UserModel.register(data.fName,data.lName,data.uName,data.age,data.email,data.pwd).then(()=>{
                        res.json({status : 'ok'});
                    }).catch((error)=>{
                        res.json({status : error});
                    })
                }else{
                    res.json({status:'exists',errors : result});
                }
                
            }).catch((error)=>{
                console.log(error);
            });
            
        }else{
            res.json({status : 'empty'});
        }
        
    },
    login : (req,res)=>{
        let data = req.body;
        if(data.email !== "" && data.pwd !== ""){
            UserModel.login(data.email,data.pwd).then((data)=>{
                console.log(data.length);
                if(data.length > 0){
                    console.log(data);
                    let authData = {};
                    authData.email = data[0].email;
                    authData.username = data[0].userName;
                    authData.id = data[0].id;
                    req.session.AuthData = authData;
                    console.log("SESSION DATA : ",req.session.AuthData);
                    res.json({status : 'ok',data : {email : data[0].email, username : data[0].userName}});
                }else{
                    res.json({status : 'notFound'});
                }
            }).catch((error)=>{
                res.json({status : error});
            })
        }else{
            res.json({status : 'empty'});
        }
    },
    checkAuth : (req,res)=>{
        if(req.session.AuthData){
            res.json({status : true,AuthData : {email : req.session.AuthData.email, username : req.session.AuthData.username}});
        }else{
            res.json({status : false});
        }
    },
    logout : (req,res)=>{
        if(req.session){
            req.session.destroy();
            req.session = null;
            res.json({status : true});
        }
    }
};