"use strict";

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item,index) => index +":" +item.length);

console.log(lengths);


function sum(arr){ let tot = 0; return tot + arr[0]; } 
exports = {sum };
console.log(exports);

console.log(exports.sum([1,2,3] ) );
