require('dotenv').config();
const mysql = require('mysql');

module.exports = {
    con : mysql.createConnection({
        host : process.env.HOST,
        user : process.env.USER,
        password : process.env.PWD,
        database : process.env.DB,
    })
}