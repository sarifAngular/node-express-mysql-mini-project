//importing Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");
// importing local javascript files
const PeopleRoutes = require("./routes/people");
const mysqlConnection= require("./connect");

//creating  express application 
const app = express();
// configure nodejs application ( it will return data as a json format )
app.use(bodyParser.json());

app.use("/people",PeopleRoutes);

//Setup server port
const port = process.env.PORT || 3000;
//Start the application on port no 3000
app.listen(port,  (req,res) =>{
    console.log("server running on port 3000");
});


// lets set a public folder for the hosting the frontend
app.use(express.static(path.join(__dirname,"public")));




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
//Now run the server.js file 
//it will be print  an err to the console

//Now run a query into the workbench 
//     	ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

//Now run server again 

