"use strict";

// DEFINING TABLE
/** Input - the total cost of the house 
 * Output - the total down payment on the house
 * Process - taking the total cost 
           - stating the conditions using if- else statments 
           - compute the total down payment based on the appropriate tax rate to the  cost 
 */

function calcDownpayment(cost){
    let downPayment;
    if(cost>=0 && cost<=50000){
        downPayment= cost*0.05;
    } else if(cost>50000 && cost<=100000){
        downPayment = 2500 + ((cost-50000)*0.10);   
    } else if (cost<100000 && cost>200000){
        downPayment = 7500 + ((cost -100000)*0.15);
    }else if(cost>=200000){
        downPayment = 5000 + ((cost -200000)*0.10);
    }
    return downPayment;
}
console.log("expect 2000: ", calcDownpayment(40000)); 
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000)); 
console.log("expect 5000: ", calcDownpayment(200000));