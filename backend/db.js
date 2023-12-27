// db connection
const moongoose=require('mongoose');
const connectDb=async()=>{
    try{
      const conn=await moongoose.connect('mongodb://0.0.0.0:27017/squaredata');
      console.log('connected');
    }catch(error){
      console.log(error.message);
    }
  }

  module.exports = connectDb;