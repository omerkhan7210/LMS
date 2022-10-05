
//SIDE NAVBAR COLLAPSE SCRIPT START
var barsOpen = document.querySelector(".bars-container");
var sidebar = document.querySelector(".side-navbar");

barsOpen.addEventListener("click",(e)=>{
    sidebar.classList.toggle("active");
});

//SIDE NAVBAR COLLAPSE SCRIPT END

//SIDE NAVBAR LIST ITEMS SHOWING DYNAMICALLY
const Items= {
        lmsItems : [
        "Dashboard",
        "Course Outline",
        "Course Plan",
        "Lecture Notes",
        "Assignments",
        "Quizzes",
        "Miscellaneous",
        "Papers",
        "Announcements",
        "Guidelines"
    ],
    
         lmsItemsLinks : [
        "Dashboard.html",
        "Course-Outline.html",
        "Course-Plan.html",
        "Lecture-Notes.html",
        "Assignments.html",
        "Quizzes.html",
        "Miscellaneous.html",
        "Papers.html",
        "Announcements.html",
        "Guidelines.html"
    ],
    
        lmsItemsIcons : [
        "fa-dashboard",
        "fa-bars",
        "fa-file-text",
        "fa-th",
        "fa-file-text",
        "fa-building",
        "fa-object-group",
        "fa-object-group",
        "fa-bullhorn",
        "fa-object-group"
    ]
    
};


for(var i = 0;i<Items.lmsItems.length;i++){

    const logo = document.querySelector(".centered-logo");
    const logoHeading = document.querySelector(".logo-heading");
    const ul = document.querySelector(".side-list");
    const navItems = document.createElement("li");
    const anchor = document.createElement("a");
    const navItemsIcons = document.createElement("i");
     const navItemsSpan = document.createElement("span");

   navItems.classList.add("nav-item");
   anchor.classList.add("row-flex","color-white","padding-block1","nav-link","center-flex");
   navItemsSpan.classList.add("span-text");
   anchor.setAttribute("href",Items.lmsItemsLinks[i]);
   ul.appendChild(navItems);
   navItems.appendChild(anchor);
   anchor.appendChild(navItemsIcons);
   anchor.appendChild(navItemsSpan);
    
   navItemsIcons.classList.add("fa",Items.lmsItemsIcons[i]);
   navItemsSpan.innerHTML = Items.lmsItems[i];
    barsOpen.addEventListener("click",()=>{
        anchor.classList.toggle("nav-link");
        anchor.classList.toggle("center-flex");
        navItemsSpan.classList.toggle("active");
        logo.classList.toggle("gap1");
        logoHeading.classList.toggle("active")
    }) 
};

//ADDING ACTIVE STATE TO SIDEBAR LINKS
const btns = document.querySelectorAll(".side-list li a");
btns[0].classList.add("active");
console.log(btns[0]);
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }




//ADDING DATE AND TIME
function checkTime(){
    const timeContainer = document.querySelector(".time");
    //const ampm = document.getElementById('am-pm');
    
   // ampm.innerHTML = "AM";
    //console.log(ampm.innerHTML)
    const date = new Date();
    const dateTime = timeContainer.children;
    const dateArray = [date.getHours(),date.getMinutes(),date.getSeconds()];
    if(dateArray[0] > 12){
        dateArray[0] -= 12;
        ampm.innerHTML = "PM";
    }
    for(i=0;i<dateTime.length;i++){
        if(dateArray[i] < 10){
            dateArray[i] = "0" + dateArray[i];
        }
        dateTime[i].innerHTML =  dateArray[i];
    }
}

setInterval(checkTime, 500);

//SELECT MENU JS
//Multiple options dropdown
//https://codepen.io/gatoledo1/pen/QWmpWjK

const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});


