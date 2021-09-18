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


/**
 * 
 * @param {number} from starting number to be printed.
 * @param {number} too last number to be printed.
 * @returns {undefined} 
 */
function printNumbers3(from,too){
    let temp = from; 
    setTimeout(function show(){
//  i used alert so it can be seen on the browser.
      if(temp < too){
    console.log(`${temp} secs!!`);
    setTimeout(show,5000);
     }    
        temp++;

    }, 5000);

}

printNumbers3(3,9);

    

