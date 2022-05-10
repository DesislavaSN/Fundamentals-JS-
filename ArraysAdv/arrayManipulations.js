// A function that manipulates an array of numbers. 
// •	Add {number}: add a number to the end of the array
// •	Remove {number}: remove all occurrences of a particular number from the array
// •	RemoveAt {index}: removes number at a given index
// •	Insert {number} {index}: inserts a number at a given index


function arrayManipulations(arr){
    let nums = arr.shift().split(" ").map(Number);
 
    function add(num){
        nums.push(num);
    }
 
    function remove(num){
        nums = nums.filter(el => el !== num);
    }
 
    function removeAt(index){
        nums.splice(index, 1);
    }
 
    function insert(num, index){
        nums.splice(index,0,num);
    }
    
    for(let i = 0; i < arr.length; i++){
        let [commands, firstNum, secondNum]= arr[i].split(" ");
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
 
        switch(commands){
            case "Add":  
                add(firstNum);
            break;
            case "Remove":  
                remove(firstNum);
            break;
            case "RemoveAt":  
                removeAt(firstNum);
            break;
            case "Insert":  
                insert(firstNum, secondNum);
            break;
        }
    } 
    console.log(nums.join(" "));  
}
