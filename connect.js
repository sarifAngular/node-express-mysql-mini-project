const mysql = require("mysql");
// Now we have to configure how the database works
// we have to define the configuration 

var mysqlConnection= mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database: "crud",
    multipleStatements: true

});

// it takes a callback function
mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("Connection Successful");
    }
    else
    {
        console.log("Connection failed  " +err);
    }
}
);
module.exports= mysqlConnection;