const {db} = require("../../config/db");
const con = db;
const {Company} = require("../models/Company");
var obj;

class CompanyController {
    newGame(name,money){
        var sql = `INSERT INTO mycompany (name, money) VALUES ("${name}",${money})`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
        return new Company(name, money);
    }

    getMyGame(name,callback){
        
        let sql = `SELECT * FROM mycompany WHERE name = "${name}"`;
        db.query(sql, (err, result, callback) => {
            if(err) throw err;
            obj = result[0];
        });
    }
    
}

exports.companyController = new CompanyController();