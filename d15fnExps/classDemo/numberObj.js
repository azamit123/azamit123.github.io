"use strict";

const number = {
    one: 1,
    two: 22, 
    three: 333, 
    four: 444
}

const properties = ["one", "two", "three", "four"];

for(let elements of properties){
    console.log(number[elements]);
}

