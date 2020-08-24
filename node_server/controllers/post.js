const PostModel = require('../models/post');

module.exports = {
    post : (req,res)=>{
        let user = req.session.AuthData;
        let userId = user.id;
        let post = req.body.post;
        PostModel.post(userId,post).then((post)=>{
            res.json({status : true,post : post});
        }).catch((error)=>{
            console.log(error);
        });
    },
    getMePosts : (req,res)=>{
        let userId = req.session.AuthData.id;
        PostModel.getMePosts(userId).then((data)=>{
            res.json(data);
        }).catch((error)=>{
            console.log(error);
        })
    }
}