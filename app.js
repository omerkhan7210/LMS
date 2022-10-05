const express = require("express")
const dashboardRoute = require("./routes/dashboardRoute")
const loginRoute = require("./routes/loginRoute")
const registerRoute = require("./routes/registerRoute")
const registerCoursesRoute = require("./routes/registerCoursesRoute")

const mongoose = require("mongoose")
const dataURI = "mongodb+srv://omerkhan7210:omerkhan12345@cluster0.udfhf3i.mongodb.net/node?retryWrites=true&w=majority";
mongoose.connect(dataURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log("connected"))
.catch((err)=> console.log(err)
)
const app = express()

app.set("view engine","ejs")
app.use(express.static("public"))
app.listen(5000)
app.use(express.urlencoded({extended:true}))
//LOGIN
app.use("/",loginRoute)
//REGISTRATION
app.use("/register",registerRoute)
//MAIN DASHBOARD
app.use("/Dashboard",dashboardRoute);
//REGISTER COURSES
app.use("/register-courses",registerCoursesRoute)

