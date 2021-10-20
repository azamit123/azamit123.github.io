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

   
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const mycol = document.getElementById("mycol");
    document.getElementById("loginBtn").addEventListener("click",function(){
        if(username.value==="Azi" && password.value==="peace"){
            const link = document.createElement("a");
            link.setAttribute("href","./manager.html");
            mycol.appendChild(link);
            link.appendChild(this);  
        }else{
          
            alert("PASSWORD DOESNT MATCH");


        }
    })


}