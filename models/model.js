const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    enrollment:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    token:
    {
        type:String,
        required:true
    }
},
{timestamps:true}
)


const user = mongoose.model("Registeration",userSchema)
module.exports = user;