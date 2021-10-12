"use strict";

const scores = [
    {id: 1,score:10},
    {id: 2,score:5},
    {id:3,score: 8},
    {id:4,score: 12}
];

const pointsArr =[
    {id:1, points: [10,8,6,2,2]},
    {id:2, points: [0,4,2,0,0]}
];

function findAveragePoints(scores){
    let total =0;
    let count =0;
    for(const stu of scores){
        for(const score of stu.points){
            total+=score
            count++;
        }

    }
    return total/count;
}


function averageScore(score){
    let sum =0;
    let count =0;
    for(const elements of score){
        sum+= elements.score;
        count++;
     }   
    

return sum/count;
}

function highestScore(scoreArr){
    let highest = scoreArr[0];
    for(const stu of scoreArr){
        if(highest.score<stu.score){
            highest=stu;
        }
    }
    return highest;
}


console.log(findAveragePoints(pointsArr));