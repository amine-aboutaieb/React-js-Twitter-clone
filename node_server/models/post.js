const con = require('./db_config').con;


module.exports = {
    post : (userId,userPost)=>{
        return new Promise((resolve,reject)=>{
            con.query(`INSERT INTO posts VALUES(NULL,${userId},'${userPost}',NOW());`,(error)=>{
                if(error){
                    reject(error);
                }else{
                    con.query(`SELECT id,content, post_time FROM posts WHERE user_id = ${userId} ORDER BY post_time DESC LIMIT 1`,(error,post)=>{
                        if(error){
                            reject(error);
                        }else{
                            resolve(post);
                        }
                    });
                }
            });
        });
    },
    getMePosts : (userId)=>{
        return new Promise((resolve,reject)=>{
            con.query(`SELECT id,content, post_time FROM posts WHERE user_id = ${userId} ORDER BY post_time DESC;`,(error,data)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(data);
                }           
            });
        });
    },
    getProfilePosts : (username)=>{
        return new Promise((resolve,reject)=>{
            con.query(`SELECT id, content, post_time FROM posts WHERE user_id = (SELECT id FROM users WHERE username LIKE '${username}');`,(error,data)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(data);
                }
            });
        });
    }
}