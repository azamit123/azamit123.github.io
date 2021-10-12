"use strict";

function callBack(cube,num){
    return cube(num);

}
function cube(num){
    return num*num*num;
}

let number =3;

console.log(callBack(cube,number));
console.log(callBack(function(){return number*number*number},number));

let isEven = function(abc){
return abc%2===0;
};
console.log(isEven(4));

