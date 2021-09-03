"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {maxOfThree, sum, multiply,findLongestWord,reverseArray,reverseArrayInPlace,
scoreExams, generateArray }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
   
   if(a>b && a>c){
       return a;
   } else if(b>a && b>c){
      return b;
   } else if( a>=b && a>=c){
      return a;
   } else {
       return c;
   } 
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot = 1;
    for(const number of arr){
        tot*= number;
    }

    return tot;

}

/**
 * 
 * @param {Array} words string array
 * @returns{Number} the length of the longest word 
 */
function findLongestWord(words){
    let longestWord = "";
    for(let word of words){
        if(word.length>longestWord.length){
            longestWord = word;
        }
    }
    return longestWord.length;
}

/**
 * 
 * @param {Array} arr array
 * @returns{Array} revered array 
 */

 function reverseArray(arr){
    const reversedArr = [];
    for(let i = arr.length-1;i >=0 ;i--){
        reversedArr.push(arr[i]);
    }
    
    return reversedArr;
 }

 /**
  * 
  * @param {Array} arr 
  * @returns{Array} the modified arr
  */
 function reverseArrayInPlace(arr){
     const tempArr = arr.slice(0);
    for (let i = arr.length-1;i>=0;i--){
        arr[i] = tempArr[arr.length-1-i];
    }

      return arr;
 }

/**
 * 
 * @param {Array} studentAnswers an array of arrays
 * @param {Array} correctAnswers array of correct answers
 * @returns{Array} array of students answers
 */
 function scoreExams(studentAnswers, correctAnswers){
     let totalScore =[];
    for(let oneStudentAnswer of studentAnswers ){
        let index =0; 
        let singleScore =0;  
        for(let eachAnswer of oneStudentAnswer){
            if(eachAnswer === correctAnswers[index]){
                singleScore++
            }
            index++;
        }
        totalScore.push(singleScore);
    }
    
    return totalScore;
 }

 /**
  * 
  * @param {Number} row number of rows in the array
  * @param {Number} colomun  number of colomuns in the array
  * @returns {Array} 2 -dimensional array of sequential numbers
  */
 function generateArray(row,colomun){
    let multiArray = [];
    let value = 1 ;

    for(let i=0;i<row;i++){
        let arr =[];
        for(let j =0;j<colomun;j++){
           arr.push(value);
           value++;
        }
        multiArray.push(arr);
    }
    
    return multiArray;

 }
