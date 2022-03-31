//import the modules
//require() function used to import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");


//create the rest object
//rest object used to create the rest services
const app  =  express();
//where "app" is the rest object
//where "app" object used to develop the "rest" services



//enable the cors policy
app.use( cors() );


//set the json as communication language between "client" and "server"
app.use( express.json() );




//create the client object
//this client object used to connect to the "mongodb" database
const ashokIT = mongodb.MongoClient;
//where "ashokIT" is the client object
//where "ashokIT" used to connect to the mongodb database



//create the get request
app.get("/products",(req,res)=>{
    ashokIT.connect(`mongodb+srv://admin:admin@ashokit.oupkh.mongodb.net/uifullstack?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ui_fullstack");
            const collec = db.collection("products");
            collec.find().toArray((err,array)=>{
                if(err){
                    console.log(err);
                }else{
                    res.send(array);
                }
            })

        }
    })
});
//assign the port no
app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});