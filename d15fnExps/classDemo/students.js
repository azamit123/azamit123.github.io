"use strict"

const student1 ={
    studentId: "s101",
    quizAnswers: [1, 1, 2,4],
}

const student2 ={
    studentId : "s102",
    quizAnswers : [2, 1, 2,2], 
};


const student3 ={
    studentId : "s103",
    quizAnswers : [3, 1, 3,4], 
};

const students = [student1,student2,student3];
// students.push(student1);
// students.push(student2);
// students.push(student3);

const answers = [3,1,2,4];

 console.log(gradeQuiz(students,answers));

console.log(collectAnswers(3,students));



function collectAnswers(num,quizArr){
    let stdAnswers = [];

    for(let i=0; i<quizArr.length;i++){
        stdAnswers.push(quizArr[i].quizAnswers[num-1]);
    }
    return stdAnswers;

}


function gradeScore(student,answerArr){
     let result = 0;
    for ( let i=0; i< answerArr.length;i++){
        if(student.quizAnswers[i]===answerArr[i]){
                result++;
            }
    }  
    return result;
}

function gradeQuiz(student,answerArr){
        const grades = {};

    for (let std of student ){
        const studentScore = gradeScore(std,answerArr);
        grades[std.studentId] = studentScore;
    }
    return grades;

}






