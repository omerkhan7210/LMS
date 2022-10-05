const express = require("express");
const courseModel = require("../models/addCourseModel")

function registerCourses(req,res){
  try{
   const newCourse = new courseModel({
    code:req.body.code,
    title:req.body.title,
    credit_hours:req.body.credit_hours
   })
   newCourse.save()
   .then((result)=>{
    res.redirect("/register-courses")
   })
   .catch((err)=> {
    res.send(err)
    console.log(err)
   })
  }
  catch(err){
    res.send(err)
  }
  
}

module.exports = registerCourses;