"use strict";

// function loopingFac(n){
// let fact = 1;
//     for(let i=1;i<=n;i++){
//         fact*=i;
//     }
//     return fact;
// }

// function recursionFac(n){
//     if(n==1){
//         return 1;
//     }
//      return n * recursionFac(n-1);
    

// }

// console.log(loopingFac(5));
// console.log(recursionFac(5));


function countInstance(str,letter){
    
    if(str===""){
        return 0;
    }else {
        if(str.slice(0,1).includes(letter)){
             return 1+  countInstance(str.slice(1),letter);
    } else {
        return countInstance(str.slice(1),letter);
    }
}
}

console.log(countInstance("letter","e"));