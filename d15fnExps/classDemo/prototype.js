"use strict";

// let head = { glasses: 1

// };
// let table = { pen: 3
   
// };
// let bed = {
//     sheet: 1,
//     pillow: 2
   
// };
// let pockets = { money: 2000

// };

// pockets.__proto__ = bed;
// bed.__proto__ = table;
// table.__proto__ = head;

// console.log("expect 3: ", pockets.pen); 
// console.log("expect 1: ", bed.glasses);


// let animal = { eats: true };

// let rabbit = { 
// name : "white rabbit",
//  __proto__ : animal};

//   console.log(rabbit.eats);




/**
 * 
 * @param {string} firstname fname.
 * @param {string} lastname lname.
 * @param {date} birthDate date of birth.
 * @returns{object} a user obj.
 */
function User(firstname, lastname, birthDate) { 
this.firstname = firstname;
this.lastname = lastname;
this.birthDate = birthDate;
}
User.prototype = {
    getFullName: getFullName,
    getAge: getAge
};

let user1 = new User("John", "Smith", new Date("2000-10-01"));
let user2 = new User("Edward", "Hopkins", new Date("1991-11-14"));
function getFullName() { return this.firstname + ' ' + this.lastname;}
function getAge() {return new Date().getFullYear() - this.birthDate.getFullYear();}






console.log(user1.getFullName()); //John Smith 
console.log(user1.getAge()); //21

console.log(user2.getFullName());
console.log(user2.getAge()); 



function makeCounter() {
let count = 0;
return function(x) {
    if(x===undefined){
        return count++;
    }else if(x>3){
        count= count + x;
        return "increment was by value greater than 3";
    } else{
        return count =count + x;
    }
}
}

let myCount = makeCounter();
console.log(myCount());
console.log(myCount(10));
console.log(myCount())