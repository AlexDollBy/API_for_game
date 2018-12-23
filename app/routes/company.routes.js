const {db} = require("../../config/db");
const {Company} = require("../models/Company");
const con = db;
const {companyController} = require("../controller/company.controller");
var myCompany;


module.exports = function(app) {
    app.post('/newGame',(req,res)=>{
        myCompany = companyController.newGame(req.body.name, req.body.money);
        res.send(myCompany);
    });

    app.get('/getMyGame/:name',(req,res)=>{
        con.query(`SELECT * FROM mycompany WHERE name = "${req.params.name}"`,  function(err, result) {
            myCompany = result;
            res.send(myCompany);
        });
    });

    app.post('/updateMoney/:name',(req,res)=>{
        const newValue = { money: req.body.money };
        let sql = `UPDATE mycompany SET money = ${newValue.money} WHERE name = "${req.params.name}"`;
        db.query(sql, (err, result) => {
            if(err) throw err;
            res.send('Post updated...');
        });
    });

    app.delete('/deleteCompany/:name', (req, res) => {
        let sql = `DELETE FROM mycompany WHERE name = "${req.params.name}"`;
        let query = db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send('Post deleted...');
        });
    });

    app.get('/getAllCompany', (req, res) => {
        let sql = `SELECT * FROM mycompany`;
        let query = db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send(result);
        });
    });

    app.get('/myCompany',(req,res)=>{
        res.send(myCompany);
    });
};
