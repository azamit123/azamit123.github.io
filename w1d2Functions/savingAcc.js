"use strict";



// DEFINING TABLE
/* Input - amount deposited, annual interest rate and number of years saved
   Output - total amount compounded
   Process - take our input in the parameter 
            - convert the annual interset to monthly interest by dividing to 2
           - and multiply the number of years by 12
           - compute the total interest compounded over the years saved*/

function compoundInterest(initAmnt,interestRate,yearsSaved){
    const MONTHS= 12;
    let totalPayment = initAmnt *(1+ (interestRate/100)/MONTHS)** (yearsSaved*MONTHS);
    return totalPayment;
}
console.log("expect 110.47", compoundInterest(100, 10, 1)); 
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
