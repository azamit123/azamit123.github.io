"use strict";


let matrix = [ 
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]];

    

// console.log(matrix);
function sumArray(arr){
let sum =0;
let sumRow =0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum+= arr[i][j] 
    }
}
return sum;
}


console.log(sumArray(matrix));