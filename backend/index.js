const http = require('http');
const express = require("express");
const bodyParser=require('body-parser');
const connectDB = require('./db');



/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

const server = http.Server(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/**
 * Routes Definitions
 */



connectDB();


app.post("/", (req, res) => {
  let payload=req.body;
  let name=payload['name'];
  let address=payload['address'];
  let email=payload['email'];
  let mobile=payload['mobile'];

  
  if(name!='' && address!='' && email!='' && mobile!=''){
    let data={
      status:1,
      data:payload
    }
    res.send(data);
  }else{
    res.send({
      status:3,
      message:'Data Not Found'
    })
  }
});





  /*
 * Server Activation
 */

server.listen(port);