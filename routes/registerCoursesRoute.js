const express = require("express")
const router = express.Router();
const {dashboard,courses_registered} = require("../controllers/dashboardController")
const registerCoursesController = require("../controllers/registerCoursesController")
const courseModel = require("../models/addCourseModel")
let added_courses;
let listTableContainer = [],structure;

const headings = [
    "Status",
    "Code",
    "Title",
    "Credit Hours",
    "Class"
]


router.get("/",(req,res)=>{
      courseModel.find((err,result)=>{
      if (err) {
                
        throw err;
      }
      if(!result){
          res.status(401).json({msg:"User Not Found!"})
      }else{
        added_courses = result.length;
        for(i=0;i<headings.length;i++){
          const objectsResults = result[i];
          structure = `
          
          <div class="list list-${i}">
          <ul class="list-table">
              <li>
                  <h5>${headings[i]}</h5>
              </li>
              <li><h4>${code}</h4></li>
          </ul>
        </div>
        `
        listTableContainer.push(structure);
        
        }
        console.log(Object.values(result))
        res.render("register-courses",{title:"Register Courses",courses_registered,listTableContainer,added_courses})
      }//else
    })//arrow function
})

router.post("/",registerCoursesController)

module.exports = router;