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
}