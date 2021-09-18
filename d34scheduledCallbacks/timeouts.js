"use strict";
/**
 * 
 * @param {number} from starting number to be printed.
 * @param {number} too last number to be printed.
 * @returns {undefined}
 */
function printNumbers(from, too){
    let temp = from;

   let timerId = setInterval(function(){
        console.log(temp);
        if(temp===too){
            clearInterval(timerId);
        }
        temp++; 
    }, 1000);
   
}

/**
 * 
 * @param {number} from starting number to be printed.
 * @param {number} too last number to be printed.
 * @returns {undefined}
 */
function printNumbers2(from,too){
    let temp = from;

    let timer = 

    let timerId = setInterval(() => {
        console.log(`${temp} secs!!`);
        if(temp===too){
            clearInterval(timerId);
        }
        temp++;

    }, (temp+1000));

}

printNumbers(3,9);

    

