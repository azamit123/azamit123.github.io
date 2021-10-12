"use strict";

function compareNumeric(a, b) { 
if (a < b) return 1;
if (a == b) return 0;
if (a > b) return -1;
}

// function compareNumeric(a, b) { 
// if (a.localCompare(b) < b) return 1;
// if (a == b) return 0;
// if (a > b) return -1;
// }


// function compareString(a,b){
//     return b.localeCompare(a);
// }
// let arr = [ 1, 15, 2 ]; 
// let strArr = ["hi","abc","apple"];
// strArr.sort(compareString); 
// console.log(strArr);

// PRODUCT REDUCE
let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce(function (product,current) { return product * current;}, 1);
// console.log(result);

let max = arr.reduce(function(max,current){
    if(max<current){
        max= current;
    }
    return max;
}, 0);
console.log(max);


let things = { 'a': 97, 'b': 98, 'c': 99};
for (const key in things) {
     console.log(key + ', ' + things[key]);
}

