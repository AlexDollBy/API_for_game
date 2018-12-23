require('dotenv').load();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "mycompanydb"
});

function dbConnect(){
    db.connect((err) => {
        if(err){
            throw err;
        }
        console.log('MySql Connected...');
    });
}

exports.db = db;
module.exports.dbConnect = dbConnect;