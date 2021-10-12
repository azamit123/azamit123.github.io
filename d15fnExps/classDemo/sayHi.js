"use strict";

const manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
  };
  const intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
  };
  
  /**
   * @returns {undefined} 
   */
  function sayHi() {
     console.log("Hello, my name is " + this.name+ " "+ "I am " + this.age + " ." + "my job is " + this.job + ".")
  }
  
  // add sayHi function to both objects
  manager.sayHi = sayHi;
  intern.sayHi = sayHi;
  
  manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
  intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'