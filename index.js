window.onload = function(){
    const toolbars = document.querySelectorAll(".toolbar");

    for(let toolbar of toolbars){
        toolbar.addEventListener("mouseover",function(){
            toolbar.style.backgroundColor = "#F6B443";
        })

         toolbar.addEventListener("mouseout",function(){
            toolbar.style.backgroundColor = "black";
        })

    }

    const bottomDiv = document.querySelectorAll(".bottom");

    for(let bot of bottomDiv){
        bot.addEventListener("mouseover",function(){
            bot.style.backgroundColor = "#F6B443";  
        })

        bot.addEventListener("mouseout",function(){
            bot.style.backgroundColor = "black";
        })
    }

    

}