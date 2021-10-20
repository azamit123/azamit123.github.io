 
 const contactsArr = [];


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

   
    

    function setData(){
        localStorage.setItem("myContact",JSON.stringify(contactsArr));
    }

    document.getElementById("msgBtn").addEventListener("click",function(){
        const newUser={};
        const name  = document.getElementById("name");
        const email = document.getElementById("email");
        const msg = document.getElementById("message");

        if(name.value === "" || name.value.length < 4 || name.value.length > 14){
            name.style.backgroundColor = "lightPink";
            name.value = "REQUIRED FIELD, MUST HAVE CHARACTERS B/N 4-14"
                return;
        }else if(email.value.length==="" || (!email.value.includes("@"))){
             email.style.backgroundColor = "lightPink";
            email.value = "REQUIRED FIELD, MUST BE A VALID EMAIL!";
            return;
        }
        newUser.name = name.value;
        newUser.email = email.value;
        newUser.msg = msg.value;
        contactsArr.push(newUser);
        alert("MESSAGE SENT!! WILL GET BACK TO YOU ASAP!!!");
        
        name.style.backgroundColor = "white";
        name.value = "";
        email.style.backgroundColor = "white";
        email.value = "";
        msg.value = "";
            
        console.log(contactsArr);  
        setData();
         
    })

}