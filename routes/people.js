const express= require("express");
const Router = express.Router();
const mysql = require("mysql");
const mysqlConnection= require("../connect");

//fetch data from mysql server
Router.get("/",(req,res)=>{
    mysqlConnection.query("select * from employees",(err, rows, fields)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows); 
        }

    });
});



module.exports = Router;