"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr any array.
 * @returns{Array} the copy of arr.
 */
function copyArray(arr){
let arr2 = [...arr];
return arr2;
}

/**
 * 
 * @param {Array} arr1 any array.
 * @param {Array} arr2 any array.
 * @returns{Array} an array which contains elements of arr1 and arr2.
 */
function concat(arr1, arr2){
let arr3 = [...arr1,...arr2];
return arr3;
}

/**
 * 
 * @param  {...any} numbers multiple numbers.
 * @returns {Number} the minimum number of all the inputs.
 */
function findMin(...numbers) {
    let min = +Infinity;
    for(const number of numbers){
        if(number<min){
            min=number;
        }
    }
    return min;
}



function combineObjs(obj1, obj2){
    let obj3 ={
        ...obj1,...obj2
    }
    return obj3;
}