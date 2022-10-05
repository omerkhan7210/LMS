const express = require("express");
const courses_registered = 0;

//MAKING LMS LIST TABLES HEADINGS
var heading = {
    dashboard:[
      "Sr.No.",
      "Course Title",
      "Class",
      "Semester",
      "Lectures",
      "Quizes"
    ],
    assignment:[
      "Assign. No.",
      "Title",
      "Assignment",
      "Assignment Solution",
      "Remarks",
      "Added Submission",
      "Marks Obtained",
      "Returned Submission",
      "Action",
      "Deadline"
    ]
}
var listTableContainer = [],structure;
  for(i=0;i<heading.dashboard.length;i++){
    structure = `
    <div class="list list-${i}">
    <ul class="list-table">
        <li>
            <h5>${heading.dashboard[i]}</h5>
        </li>
        <li><h4>HELLO</h4></li>
    </ul>
  </div>
  `
   listTableContainer.push(structure);
  }

function dashboard(req,res){
    res.render("dashboard");
}

module.exports = {dashboard,courses_registered,listTableContainer};