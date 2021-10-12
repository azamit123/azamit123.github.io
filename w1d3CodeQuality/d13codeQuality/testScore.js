"use strict";

/**
 * @param {array} arr array of numbers
 * @returns{Number} average
 */

const score= [10,20,30,40,50];

function findAverage(arr){
    let sum = 0;
    let average = 0;
    for(let arrs of arr){
        sum+=arrs;
    }
    average = sum/arr.length;
    return average;
}


const arr = [];

for(let i =0;i<10;i++){
  arr[i]=Math.ceil(Math.random()*10);
}

console.log(findAverage(score));
console.log(arr);
console.log(findAverage(arr));
