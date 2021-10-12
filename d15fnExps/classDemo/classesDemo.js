"use strict";

/**
 * @returns{number} the area of square.
 */
function area  (){
       return this.side * this.side;
    }

const square = {
    side : 5,   
 };
 square.__proto__ = {area: area};

    
/**
 * 
 * @param {Number} side any number
 * @returns {Object} constructor function.
 */
function Square1(side){
    this.side = side;
}
Square1.prototype.area = area;

class Square2 {
    constructor(side){
        this.side = side;
    }
    area(){
        return this.side *this.side;
    }
};

class MorphableSquare extends Square2 {
    constructor(side,color,className){
        super(side);
        this.color = color;
        this.className = className;
    }
    morph(){
       return this.className = this.color;
    }
};


const morph2blue = new MorphableSquare(3, "blue", "white");
const morph2green = new MorphableSquare(3, "green", "white"); 
console.log("expect 9: ", morph2blue.area());
console.log("expect 3: ", Object.getOwnPropertyNames(morph2blue).length);