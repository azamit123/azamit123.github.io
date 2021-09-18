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
    let timer = temp+1000;
    let timerId = setInterval(() => {
//  i used alert so it can be seen on the browser.
        alert(`${temp} secs!!`);
        if(temp===too){
            clearInterval(timerId);
        }
        temp++;

    }, (timer));

}

printNumbers2(3,9);

    

