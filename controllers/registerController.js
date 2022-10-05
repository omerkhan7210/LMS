const express = require("express")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const registerUser = require("../models/model");
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = "rogrjigirojg3944t095@#(#)oihtriobhb#@__(%&*TB($*J";

async function registration(req,res){    
    const {name,enrollment,email,plainTextPassword}= req.body;
    const token = jwt.sign({name,enrollment},TOKEN_SECRET)
    bcrypt.genSalt(10, async (err, salt) => {
        
        bcrypt.hash(plainTextPassword, salt, async function(err, password) {
            const response = new registerUser({name,enrollment,email,password,token})
            response.save()
            .then((result)=>{
                req.cookie("jwt",result.token,{
                    maxAge:30*60,
                    httpOnly:true
                })
                res.render("dashboard",{title:"LMS",username:result.name})  
            })
            .catch((err)=>{
                if(err.code == 11000 && err.keyPattern.username == 1){
                    res.render("register",{title : "Registration",username:name,text:" already exits"})
                }else if(err.code == 11000 && err.keyPattern.email == 1){
                    res.render("register",{title : "Registration",username:email,text:" already exits"})
                }else{
                    console.log(err)
                }
                
            })
        })
    })
           
}

module.exports = registration;