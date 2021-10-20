let projectArr = [];

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

    let myInfo = localStorage.getItem("myProjects");
    projectArr = JSON.parse(myInfo);
    

   
    createProjects(projectArr);

     function createProjects(arr){
         
        for(let i = 0; i< arr.length; i++){
           const projectDiv = document.createElement("div");
           projectDiv.setAttribute("class","row myProject mt-5");
           const imgDiv = document.createElement("div");
           imgDiv.setAttribute("class","col-sm-7 mb-5 myImg");
            const img = document.createElement("img");
            img.setAttribute("src",arr[i].pic);
            img.setAttribute("class","img-thumbnail");
           const infoDiv = document.createElement("div");
           infoDiv.setAttribute("class","col-sm-4 mb-5");
           const date = document.createElement("p");
           date.innerHTML = arr[i].date;
           const name = document.createElement("h5");
           name.innerHTML = arr[i].name;
           const info = document.createElement("p");
           info.setAttribute("class","lead");
           info.innerHTML = arr[i].info; 
           const link = document.createElement("a");
           link.setAttribute("href","./projectSlide.html");
           link.innerHTML = "More info...";
           link.style.color = "#f6b443"
           info.append(link);
           infoDiv.appendChild(date);
           infoDiv.appendChild(name);
           infoDiv.appendChild(info);
            imgDiv.appendChild(img);
           projectDiv.appendChild(imgDiv);
           projectDiv.appendChild(infoDiv);
           wrapper.appendChild(projectDiv);
        }     

    }  

    const container = document.getElementById("toolbar");
    const btnDiv = document.createElement("div");
    btnDiv.setAttribute("class","ml-5")
    const mySortBtn = document.createElement("button");
    mySortBtn.innerHTML = "SORT ME BY DATE!";
    mySortBtn.setAttribute("class","  Btn btn-outline-warning position-fixed end-0 bottom-0");
    btnDiv.appendChild(mySortBtn);
    container.appendChild(btnDiv);

    
    const btn2Div = document.createElement("div");
    btn2Div.setAttribute("class"," p-4")
    const mySortBtnD = document.createElement("button");
    mySortBtnD.innerHTML = "SORT ME BY DIFFICULTY!";
    mySortBtnD.setAttribute("class"," Btn btn-outline-warning position-fixed end-0 bottom-0 mb-5");
    btn2Div.appendChild(mySortBtnD);
    container.appendChild(btn2Div);



   const myprojectRow = document.querySelectorAll(".myProject");

    mySortBtn.addEventListener("click",function(){
       const sortedArr = projectArr.sort(function(a,b){ return new Date(b.date) - new Date(a.date)});
       console.log(sortedArr)
       for(let row of myprojectRow){
           row.remove();
       }
        createProjects(sortedArr);
    });


    mySortBtnD.addEventListener("click",function(){
        console.log(myprojectRow);
        const diffSort = projectArr.sort(function(a,b){return a.difficulty - b.difficulty});
         for(let row of myprojectRow){
             console.log(row);
            row.remove();
         }
         createProjects(diffSort);
    });



 
}

   
