"use strict";

// DEFINING TABLE 
/*  Input - the amount of sales in $ , statues whether the employee is paid salary or not
    Output - sales commission based on the sales.
    process - taking the input and check
           - using if - else statments provide the appropriate conditions
           - calculate the commission based on the conditions(isSalaried and the sales amount)
*/ 

function computeSalesCommission(isSalaried,salesAmnt){
    let Commission = 0;
    if(isSalaried){
        if(salesAmnt<300){
        Commission=0;
        } else if(salesAmnt>=300 && salesAmnt<=500){
        Commission = salesAmnt*0.01;
        } else if(salesAmnt>500){
        Commission = ((salesAmnt-500)*0.02)+5;
        } 
    } else if(!isSalaried){
        if(salesAmnt>=300 && salesAmnt<=500){
        Commission = salesAmnt*0.02;
        }else if(salesAmnt>500){
        Commission = ((salesAmnt-500)*0.03)+10;
        }
    }

    return Commission;

}

console.log("expect 65 " ,computeSalesCommission(true,3500));
console.log("expect 100 " ,computeSalesCommission(false,3500));
console.log("expect 0 " ,computeSalesCommission(true,100));
console.log("expect 0 " ,computeSalesCommission(false,100));
