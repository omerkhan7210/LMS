const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const loginUser = require("../models/model");
const {dashboard,courses_registered,listTableContainer} = require("./dashboardController")
const TOKEN_SECRET = "rogrjigirojg3944t095@#(#)oihtriobhb#@__(%&*TB($*J";

async function login(req,res){

    try{
        const email = req.body.email;
        const plainTextPassword = req.body.password;
        //const token = jwt.sign({email},TOKEN_SECRET)
        loginUser.findOne({email},function(err, result) {
        if (err) {
                
                throw err;
        }
        if(!result){
            res.status(401).json({msg:"User Not Found!"})
        }else{
            bcrypt.compare(plainTextPassword, result.password, (err, data) => {
                //if error than throw error
                if (err) throw err

                //if both match than you can do anything
                if (data) {
                    //req.cookie("jwt",result.token,{
                    // maxAge:30*60,
                    //httpOnly:true
                    //})
                    return res.status(200).render("dashboard",{title:"LMS",courses_registered,username:result.name,text:"",listTableContainer});
                    
                    
                } else {
                    return res.status(401).json({ msg: "Invalid credencial" })
                }
                
            })
        }
            
        })
    }
    catch(err){
        console.log(err)
    }
    
}

module.exports = login;