"use srict";

//  PRODUCT REDUCE
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce(function (product,current) { return product * current;}, 1);
console.log(result);

let max = arr.reduce(function(max,current){
    if(max<current){
        max= current;
    }
    return max;
}, 0);
console.log(max);


// EASIER WAY OF FINDING MAX

let max1 = arr.reduce((max,current) => Math.max(max,current),0);
console.log(max1);

// let result1 = arr.reduce(function (sum,current) { 
//     let counter = 0;
//     return sum + current;}, 0);

//     console.log(result1/arr.length);
