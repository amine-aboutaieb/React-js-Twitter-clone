const con = require('./db_config').con;

module.exports = {
    register : (fName,lName,uName,age,email,pwd)=>{
        return new Promise((resolve,reject)=>{
            con.query(`INSERT INTO users VALUES(NULL,'${fName}','${lName}','${uName}',${age},'${email}','${pwd}');`,(error)=>{
                if(error){
                    reject(error);
                }else{
                    resolve();
                }
            });
        });
    },
    login : (email,pwd)=>{
        return new Promise((resolve,reject)=>{
            con.query(`SELECT * FROM users WHERE email LIKE '${email}' && pwd LIKE '${pwd}';`,(error,result)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            });
        });
    },
    checkEmailAndUsername : (email,userName)=>{
        let errors = {email : false,username : false};
        return new Promise((resolve,reject)=>{
            con.query(`SELECT COUNT(*) AS emailNum FROM users WHERE email LIKE '${email}';`,(error,result)=>{
                if(error){
                    reject(error);
                }else{
                    if(result[0].emailNum > 0){
                        errors.email = true;
                    }
                    con.query(`SELECT COUNT(*) AS uNameNum FROM users WHERE userName LIKE '${userName}';`,(error,result)=>{
                        if(error){
                            reject(error);
                        }else{
                            if(result[0].uNameNum > 0){
                                errors.username = true;
                            }
                            resolve(errors);
                        }
                    });
                }
            })
        });
    }
}