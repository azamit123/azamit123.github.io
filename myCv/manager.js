let contactsArr = [];
let coursesArr =[];
let projectsArr = [];

window.onload = function(){


    const toolbars = document.querySelectorAll(".toolbar");

    for(let toolbar of toolbars){
        toolbar.addEventListener("mouseover",function(){
            toolbar.style.backgroundColor = "#F8C146";
        })

         toolbar.addEventListener("mouseout",function(){
            toolbar.style.backgroundColor = "black";
        })

    }

    let catagory = "courses";
    let myCourses = localStorage.getItem("myCourses");
    let myProject = localStorage.getItem("myProjects");
    let mycontacts = localStorage.getItem("myContact");

    projectArr = JSON.parse(myProject);
    coursesArr = JSON.parse(myCourses);
    contactsArr = JSON.parse(mycontacts);

    function setData(){
         localStorage.setItem("myCourses",JSON.stringify(coursesArr));
         localStorage.setItem("myProjects",JSON.stringify(projectArr)); 
         localStorage.setItem("myContact",JSON.stringify(contactsArr));  
    }

   


    const newCourse = {};
    const newProject = {};



    const myForm = document.forms.myForm;
     const displayForm = document.forms.displayForm;
    const addBtn = document.getElementById("addBtn");
    const addCourses = document.getElementById("CourseBtn");
    const addProject = document.getElementById("projectBtn");
    const editCourse = document.getElementById("editCourseBtn");
    const editproject = document.getElementById("editprojectBtn");
    const view = document.getElementById("viewContact");
    const delBtn = document.getElementById("delBtn");
    const editBtn = document.getElementById("editBtn");
    const delMsgBtn = document.getElementById("delBtnMsg");
    const infoDiv = document.getElementById("infoDiv");
    // ADD NEW COURSE.
    addCourses.addEventListener("click",function(){
        catagory = "courses";
        infoDiv.style.color = "white";
        infoDiv.innerHTML = "Enter details of the Course here:"; 
        document.getElementById("name").style.display = "block";
         document.getElementById("date").style.display = "block";
         document.getElementById("msg1").style.display = "block";
        document.getElementById("img").remove();
        document.getElementById("diffi").remove();   
        
    });

    // ADD NEW PROJECT.
    const date = document.getElementById("date");
    addProject.addEventListener("click",function(){
        catagory = "project";
         infoDiv.style.color = "white";
        infoDiv.innerHTML = "Enter details of the Project here:"
        
        document.getElementById("name").style.display = "block";
         document.getElementById("date").style.display = "block";
         document.getElementById("msg1").style.display = "block";

        const imginput = document.createElement("input");
        imginput.setAttribute("placeholder","Enter Image Link");
        imginput.setAttribute("class","form-control mb-4");
        imginput.type = "text";
        imginput.id = "img";
        date.after(imginput);
        const difficultyInput = document.createElement("input");
        difficultyInput.setAttribute("placeholder","Enter Difficulty Level 0-10");
        difficultyInput.setAttribute("class","form-control mb-4");
        difficultyInput.type = "number";
        difficultyInput.id = "diffi";
        imginput.after(difficultyInput);
    });


    if(catagory==="courses"){
        addBtn.addEventListener("click",function(){
        newCourse.name = document.getElementById("name").value;
        newCourse.date = document.getElementById("date").value;
        newCourse.info = document.getElementById("msg1").value;
        newCourse.code = document.getElementById("code").value;
        coursesArr.push(newCourse);
            setData();
            alert("sucessfully added");
            myForm.reset();    
        });
    } else if(catagory ==="project"){
        addBtn.addEventListener("click",function(){
        newProject.name = document.getElementById("name").value;
        newProject.date = document.getElementById("date").value;
        newProject.info = document.getElementById("msg1").value;
        newProject.code = document.getElementById("code").value;
        newProject.pic  = imginput.value;
        newProject.difficulty = difficultyInput.value;
        projectArr.push(newProject);
            setData();
            alert("sucessfully added");
            myForm.reset(); 
            
        });
    }

// DELETE COURSE
        document.getElementById("delCourseBtn").addEventListener("click",function(){
            catagory = "courses";
        infoDiv.innerHTML = "Enter the code of the course you want to delete:";
         document.getElementById("name").style.display = "none";
         document.getElementById("date").style.display = "none";
         document.getElementById("msg1").style.display = "none";
         document.getElementById("img").remove();
         document.getElementById("diffi").remove();

        });

        // DELETE PROJECT
 
    document.getElementById("delprojectBtn").addEventListener("click",function(){
        catagory = "project";
        infoDiv.innerHTML = "Enter the code of the project you want to delete:";
        document.getElementById("name").style.display = "none";
         document.getElementById("date").style.display = "none";
         document.getElementById("msg1").style.display = "none";
         document.getElementById("img").remove();
         document.getElementById("diffi").remove();

       


    })

        if(catagory==="courses"){
            delBtn.addEventListener("click",function(){
         const code = document.getElementById("code").value;
           for(let i=0; i<coursesArr.length;i++){
               if(coursesArr[i].code === code){
                  coursesArr.splice(i,1);
                   setData();
                   alert("deleted");
                    myForm.reset();
                    return;
               }
                   
               }
        alert("Course not found please enter the right course code");
               
         })

        } else if(catagory==="project"){
             delBtn.addEventListener("click",function(){
         const code = document.getElementById("code").value; 
           for(let i=0; i<projectsArr.length;i++){
               if(projectsArr[i].code === code){
                  projectsArr.splice(i,1);
                  setData();
                   myForm.reset();
                   alert("deleted");
                    return;
               }
                   
               }
        alert("Project not found please enter the right Project code");
               
         })

        }
// EDIT COURSE
       
        editCourse.addEventListener("click",function(){
        catagory = "courses";
        infoDiv.innerHTML = "Enter the information you want to edit:";
         document.getElementById("name").style.display = "block";
         document.getElementById("date").style.display = "block";
         document.getElementById("msg1").style.display = "block";
        document.getElementById("img").remove();
        document.getElementById("diffi").remove();
        
           
        });

        editproject.addEventListener("click",function(){
            catagory = "project";
        const imginput = document.createElement("input");
        imginput.setAttribute("placeholder","Enter Image Link");
        imginput.setAttribute("class","form-control mb-4");
        imginput.type = "text";
        date.after(imginput);
        const difficultyInput = document.createElement("input");
        difficultyInput.setAttribute("placeholder","Enter Difficulty Level 0-10");
        difficultyInput.setAttribute("class","form-control mb-4");
        difficultyInput.type = "number";
        imginput.after(difficultyInput);

        });

        if(catagory==="courses"){
             editBtn.addEventListener("click",function(){
        const code = document.getElementById("code").value;
        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const info = document.getElementById("msg1").value;
        
                 for(let i=0; i<coursesArr.length; i++){
                        if(coursesArr[i].code === code){
                            if(name!==""){
                                console.log(coursesArr[i]);
                                coursesArr[i].name = name;
                            }else if(date!==""){
                                coursesArr[i].date = date;
                                 console.log(coursesArr[i]);
                            }else if(info!==""){
                                coursesArr[i].info = info;
                        }
                    }
                    
                }
                setData();
                alert("sucessfully edited");
                myForm.reset();
             });
        }else if(catagory==="project"){

        editBtn.addEventListener("click",function(){
        const code = document.getElementById("code").value;
        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const info = document.getElementById("msg1").value;
        imginput.style.display = "block";
        difficultyInput.style.display = "block"; 
                 for(let i=0; i<projectsArr.length; i++){
                        if(projectsArr[i].code === code){
                            if(name!==""){
                                console.log(projectsArr[i]);
                                projectsArr[i].name = name;
                            }else if(date!==""){
                                projectsArr[i].date = date;
                                 console.log(projectsArr[i]);
                            }else if(info!==""){
                                projectsArr[i].info = info;
                        } else if(imginput.value!==""){
                            projectsArr[i].pic = imginput.value;
                        }else if(difficultyInput.value!==""){
                            projectsArr[i].difficulty = difficultyInput.value;
                        }
                    }
                    
                }
                 alert("sucessfully edited");
                setData();
                myForm.reset();
             });

        }
 

// DISPLAY CONTACTS
   
    const from = document.getElementById("from");
    const email = document.getElementById("email");
    const msg = document.getElementById("msg2");
    const preBtn = document.getElementById("preBtn");
    const nextBtn = document.getElementById("nextBtn");


    function display(pos){
       from.value = contactsArr[pos].name; 
       email.value = contactsArr[pos].email;
       msg.value = contactsArr[pos].msg;
    }


    let temp = -1;
    view.addEventListener("click",function(){
        temp = contactsArr.length-1;
        display(temp);
 });
    preBtn.addEventListener("click",function(){
        if(temp<0){
            temp = contactsArr.length-1;
        }else{
             temp -=1;
        }
       
         display(temp); 
    });

    nextBtn.addEventListener("click",function(){
        if(temp ===contactsArr.length-1){
            temp = 0;
        }else{
            temp+=1 ;      
        }  
         display(temp);   
    });
// DELETE CONTACT
    delMsgBtn.addEventListener("click",function(){
        contactsArr.splice(temp,1);
         setData();
         alert("sucessfully deleted!") 
         displayForm.reset(); 
        
    }); 

  
    
    

    

}