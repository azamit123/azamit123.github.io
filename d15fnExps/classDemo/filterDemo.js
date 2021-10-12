"use strict";

const numbers = [1, 5, 18, 2, 77, 108];

let evens = numbers.filter(item => item%2===0);
let oneEven = numbers.find(item => item%2===0);
let posEven = numbers.findIndex(item => item%2===0);

console.log(evens);
console.log(oneEven);
console.log(posEven);

