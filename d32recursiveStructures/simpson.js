"use strict";

function TreeNode(value) { 
this.value = value; 
this.descendents = [];
}
// create nodes with values
const abe = new TreeNode('Abe');
 
const homer = new TreeNode('Homer'); 
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents 
abe.descendents.push(homer); 
homer.descendents.push(bart, lisa, maggie);

/**
 * 
 * @param {Object} simpsons its a tree like object.
 * @returns {undefined} nothing is returned just display.
 */
function displayNames(simpsons){
    if(simpsons.descendents===[]){
        console.log(`${simpsons.value}`);
    }else{
        for(const simpson of simpsons.descendents){
            displayNames(simpson);
        }
        console.log(`${simpsons.value}`);
    }  
}

/**
 * 
 * @param {Object} tree 
 * @param {string} str a value to be found.
 * @returns {boolean} true if str is found else false.
 */
function findTarget(tree,str){
     if(str===""){
        return; }
    if(tree.value===str){
            return true;
         }
     if(tree.descendents!==[]){
        for(const subTree of tree.descendents){
       if(findTarget(subTree,str)){
           return true;
       }
    }

 }
 return false;
}


/**
 * 
 * @param {Object} tree 
 * @param {string} str a name to be matched.
 * @returns {Object} sub tree of the matche name.
 */
function findSubtree(tree,str){
    if(tree.value===str){
        return tree;

    } else if(tree.descendents.length!==0){
        for(const subTree of tree.descendents){
            if(findTarget(subTree,str)){
            return findSubtree(subTree,str);
            }
           
        }
    }
     return null;
}





  console.log(findSubtree(abe,"Maggie"));
