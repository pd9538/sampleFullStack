const { Schema,model} =require('mongoose');

const mySchema=new Schema({
    value:{
        type:String,
        required:true,
        maxlength:50
    },
    square:{
        type:String,
        required:true,
        maxlength:50
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

const valueModel=model('value',mySchema);
module.exports=valueModel;