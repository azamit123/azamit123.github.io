"use strict";

const bracket = ["{", "}", "{", "{", "}", "}" ];
const bracket1 =  [ "{", "{", "}", "{" ]

function isBalanced(arr){
    const stack =[]
    
    for(let i=0;i<arr.length;i++){
        if(arr[0]==="}"){
            return false;
        } else if(arr[i]==="{"){
            stack.push("{");
        }else if(arr[i]==="}"){
            stack.pop();
        }
    }
     if(stack.length===0){
            return true;
        }else {
            return false;
        }
    }

    console.log(isBalanced(bracket));
    console.log(isBalanced(bracket1));


