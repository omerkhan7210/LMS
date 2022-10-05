const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addCourseSchema = new Schema({
    code:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    credit_hours:{
        type:String,
        required:true,
    }
   
},
{timestamps:true}
)


const addedCourse = mongoose.model("allCourse",addCourseSchema)

module.exports = addedCourse;