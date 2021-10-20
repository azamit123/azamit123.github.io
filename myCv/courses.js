"use strict";

 let coursesArr = [];

window.onload = function(){


 const toolbars = document.querySelectorAll(".toolbar");
    for(let toolbar of toolbars){
        toolbar.addEventListener("mouseover",function(){
            toolbar.style.backgroundColor = "#F6B443";
        });

         toolbar.addEventListener("mouseout",function(){
            toolbar.style.backgroundColor = "black";
        });

    }

let myInfo = localStorage.getItem("myCourses");


    coursesArr = JSON.parse(myInfo);
    console.log(coursesArr);
    console.log(myInfo);

 createdCourse(coursesArr);
    function createdCourse(arr){
        for(let i = 0; i < arr.length; i+=2){
    const courseDiv = document.createElement("div");
    courseDiv.setAttribute("class","row mt-5 myCourses p-2");
    const courseCol1 = document.createElement("div"); 
    courseCol1.setAttribute("class", "col-sm  m-2  shadow p-4 mb-4 rounded bg-gradient");
    const courseDate = document.createElement("p");
    courseDate.innerHTML = arr[i].date;
    const courseName = document.createElement("h5");
    courseName.innerHTML = arr[i].name;
    const courseInfo = document.createElement("p");
   
   
    courseInfo.innerHTML = arr[i].info;
    const courseCol2 = document.createElement("div");
    courseCol2.setAttribute("class","col-sm  shadow-lg p-4 mb-4 bg-gradient  rounded m-2 ");
    const courseDate2 = document.createElement("p");
    courseDate2.innerHTML = arr[i+1].date;
    const courseName2 = document.createElement("h5");
    courseName2.innerHTML = arr[i+1].name;
    const courseInfo2 = document.createElement("p");
    courseInfo2.innerHTML = arr[i+1].info;
    
    courseCol2.appendChild(courseDate2);
    courseCol2.appendChild(courseName2);
    courseCol2.appendChild(courseInfo2);

    courseCol1.appendChild(courseDate);
    courseCol1.appendChild(courseName);
    courseCol1.appendChild(courseInfo);

    courseDiv.appendChild(courseCol1);
    courseDiv.appendChild(courseCol2);
    wrapper.appendChild(courseDiv);

    }
 }
    

    const container = document.getElementById("container");
    const btnDiv = document.createElement("div");
    btnDiv.setAttribute("class","mr-5")
    const mySortBtn = document.createElement("button");
    mySortBtn.innerHTML = "SORT ME DECSENDING!";
    mySortBtn.setAttribute("class","Btn btn-outline-warning position-fixed end-0 top-20 mt-5");
    btnDiv.appendChild(mySortBtn);
    container.appendChild(btnDiv);

    const btnDiv2 = document.createElement("div");
    btnDiv2.setAttribute("class","mr-5")
    const mySortBtn2 = document.createElement("button");
    mySortBtn2.innerHTML = "SORT ME ASCENDING!";
    mySortBtn2.setAttribute("class","Btn btn-outline-warning position-fixed end-0 top-30");
     btnDiv2.appendChild(mySortBtn2);
    container.appendChild(btnDiv2);


    const myCoursesRow = document.querySelectorAll(".myCourses");
    
    mySortBtn.addEventListener("click",function(){
        coursesArr.sort(function(a,b){ return new Date(b.date) - new Date(a.date)});
       for(let row of myCoursesRow){
           row.remove();
       }
        createdCourse(coursesArr);
    });

    mySortBtn2.addEventListener("click",function(){
        coursesArr.sort(function(a,b){ return new Date(a.date) - new Date(b.date)});
         for(let row of myCoursesRow){
           row.remove();
       }
        createdCourse(coursesArr);
    });

    
}
