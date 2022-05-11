//Problem 2. Array Modifier

/* You are given an array with integers. Write a program to modify the elements after receiving the following commands:
•	"swap {index1} {index2}" takes two elements and swap their places.
•	"multiply {index1} {index2}" takes element at the 1st index and multiply it with the element at 2nd index. Save the product at the 1st index.
•	"decrease" decreases all elements in the array with 1.  */


function arrayModifier(input) {
    let nums = input.shift().split(" ").map(Number);
    let endCommand = input.indexOf("end");
    // console.log(endCommand);

    for (let i = 0; i < endCommand; i++) {
        let [command, index1, index2] = input[i].split(" ");
        index1 = Number(index1);
        index2 = Number(index2);
        // console.log(command);
        // console.log(index1);

        if (command == "swap") {
            let currEl = nums[index1];
            nums[index1] = nums[index2];
            nums[index2] = currEl;
            // console.log(nums[index1], nums[index2]);
            // console.log(nums);
        } else if (command == "multiply") {
           let newEl = nums[index1] * nums[index2] ;
            //console.log(newEl);
           nums.splice(index1,1,newEl);
        } else if (command == "decrease") {
            for (let i = 0; i < nums.length;i++) {
                nums[i] -= 1;
                // console.log(nums);
            }
        }
    }
    console.log(nums.join(", "));
}

arrayModifier([
    '1 2 3 4',
    'swap 0 1', // 2,1,3,4
    'swap 1 2', //2,3,1,4
    'swap 2 3', //2,3,4,1
    'multiply 1 2', //2,12,4,1
    'decrease', //1,11,3,0
    'end'
]);

console.log(" ------- ");

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);




