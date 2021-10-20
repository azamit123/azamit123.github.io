    
    const coursesArr = [];
    
    function Courses(name,code, date,info){
        this.name = name;
        this.date = date;
        this.info = info;
        this.code = code;
    }

     
    const probSolve = new Courses("Problem-Solving","CS-105", "2021/1/22","learining how to think like a computer. And introduction to the fundmentals of Java.");

    
    const proProgramming = new Courses("Procedural Programming","CS-201","2021/2/22","writing procedures or methods that perform operations on the data");

    
    const oop = new Courses("Object Oriented Programming","CS-203","2021/3/19","creating and manuplating objects that contain both data and methods in Java.");

    
    const ds = new Courses("Data Structures","CS-221","2021/4/17","gives clear prespective on how data are arranged in a computer and the structures of certain data types in relation to  the best way to arrang and use those datas considering space and time.")

   
    const math = new Courses("Introduction to Discrete Mathematics","MATH-172","2021/5/21","some mathematical concepts in relation to computer science");
    
    
    const jsoop = new Courses("Fundamentals of Object-Oriented Programming in JavaScript","CS-305","2021/7/30","A brief introduction to Javascript and differences of Java and Javascripts, and introduction to functional programming");

  
    const wap = new Courses("Web Application Programming in JavaScript","CS-315","2021/8/27","An introduction to HTML,CSS,Bootstrap and in deepth understanding on how responsive web pages are created");
     
    
    const leadership = new Courses("Leadership for Tech Managers","STC","2021/7/16","How to be a good leader and a follower as well.")
    const wrapper = document.getElementById("wrapper");
    
    coursesArr.push(wap,jsoop,math,ds,oop,probSolve,proProgramming,leadership);
   
    // PROJECT OBJECT AND ARRAY

    const projectArr = [];

    function Projects(name,date,pic,info,difficulty,code){
        this.name = name;
        this.date = date;
        this.pic = pic;
        this.info = info;
        this.difficulty = difficulty;
        this.code = code;
    }

    
    const payroll = new Projects("payRoll","2021/4/11","./payroll.jpeg","The payroll manager App helps managers, manage their employees salary easily and effectly while also keeping track of vacation time and type of payment.",8,2);

     const library = new Projects("Library manager","2021/4/22","./library.png","Organizing and managing the books and the borrowers",2,3) 
    
   
    const google = new Projects("Digital mapping","2021/6/17","./google.jpeg","Dijkstras algorithim in relation to digital mapping.",4,1);

   

    projectArr.push(payroll,google,library);
    // const wrapper  = document.getElementById("wrapper");

window.onload = function(){
 
    setData();

    const toolbars = document.querySelectorAll(".toolbar");

    for(let toolbar of toolbars){
        toolbar.addEventListener("mouseover",function(){
            toolbar.style.backgroundColor = "#F8C146";
        })

         toolbar.addEventListener("mouseout",function(){
            toolbar.style.backgroundColor = "black";
        })

    }

    function setData(){
        localStorage.setItem("myCourses",JSON.stringify(coursesArr));
        localStorage.setItem("myProjects",JSON.stringify(projectArr));
    }

}