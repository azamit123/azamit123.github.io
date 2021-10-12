 const letters = ["I","m","n"];

function displayElements(arr){
let count =0;
for(let i=0;i<arr.length;i++){
console.log(arr[i]);
count++;
}
return count;
}

const showEle = displayElements(letters);
console.log(showEle);