const express = require("express")
const router = express.Router();
const registrationController = require("../controllers/registerController")

router.get("/",(req,res)=>{
    res.render("register",{title : "Registration",username:" ", text:" "});
})

router.post("/",registrationController)

module.exports = router;