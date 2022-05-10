//6.	Bomb Numbers
/* A function that receives two parameters: sequence of numbers and special bomb number with a certain power. 
Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. 
Detonations are performed from left to right and all detonated numbers disappear. 
The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and its power.
The output is the sum of the remaining elements in the sequence. */


function bombNums(arr, bomb) {
    let specialNum = bomb[0];
    // console.log(specialNum);
    let power = bomb[1];
    let onIndex = arr.indexOf(specialNum);
    // console.log(onIndex);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(specialNum)) {
            let startIndex = onIndex - power;
            let range = 1 + power * 2;
            // console.log(startIndex, " startIndex");
            // console.log(range);
            arr.splice(startIndex, range);  
            // console.log(arr);
        }
        onIndex = arr.indexOf(specialNum);
        // console.log(arr);
        sum += arr[i];
    }
    console.log(sum);
}

bombNums([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNums([1, 2, 1, 1, 1], [2, 3]);
// bombNums([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNums([1, 7, 7, 1, 2, 3], [7, 1]);
// bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);