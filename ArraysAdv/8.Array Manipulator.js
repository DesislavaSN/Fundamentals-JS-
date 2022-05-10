//8	. *Array Manipulator

/* A function that receives an array of integers and an array of string commands and executes them over the array. The commands are as follows:
•	add <index> <element> – adds element at the specified index;
•	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index;
•	contains <element> – prints the index of the first occurrence of the specified element (if exists);
•	remove <index> – removes the element at the specified index;
•	shift <positions> – shifts every element of the array the number of positions to the left (with rotation);
•	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …);
•	print – print the last state of the array;  */

function arrayManipulator(integers, commands) {
    // let isIncluded = false;
    let newIntegers = [];

    for (let i = 0; i < commands.length; i++) {
        // console.log(commands[i]);
        let tokens = commands[i].split(" ");
        let command = tokens[0];

        if (command == "add") {
            let indexEl = tokens[1];
            let element = Number(tokens[2])
            integers.splice(indexEl, 0, element);
            // console.log(integers, " add command");
        } else if (command == "addMany") {
            let indexEl = tokens[1];
            let elements = tokens.slice(2);
            // console.log(elements);
            for (let i = 0; i < elements.length; i++) {
                let el = Number(elements[i]);
                indexEl = Number(indexEl) + i;
                integers.splice(indexEl, 0, el);
            }
            // console.log(integers, " add many command");
        } else if (command == "contains") {
            let element = Number(tokens[1]);
            let onIndex = integers.indexOf(element);
            // console.log(onIndex);
            if (integers.includes(element)) {
                // isIncluded = true;
                console.log(onIndex);
            } else {
                // isIncluded = false;
                console.log(-1);
            }
        } else if (command == "remove") {
            let indexEl = tokens[1];
            integers.splice(indexEl, 1);
            // console.log(integers, " remove command");
        } else if (command == "shift") {
            let position = Number(tokens[1]);
            // console.log(position);
            for (let i = 0; i < position; i++) {
                let shiftedEl = integers.shift();
                integers.push(shiftedEl);
            }
            // console.log(integers, " shift command");
        } else if (command == "sumPairs") {
            // console.log(integers, " before changes");
            for (let i = 0; i < integers.length; i += 2) {
                let sum = 0;
                if (integers[i] == integers[integers.length-1]) {
                    sum += integers[i];
                } else {
                    sum = integers[i] + integers[i + 1];
                }
                newIntegers.push(sum);
            }
            integers = newIntegers.slice();
            // console.log(integers, " sum pairs command");
        } else {
            console.log(`[ ${integers.join(", ")} ]`);
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7],
['add 1 8', 'contains 1', 'contains 3', 'print']);

console.log(" ----- ");

arrayManipulator([1, 2, 3, 4, 5],
['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);


// arrayManipulator([2, 2, 4, 2, 4],
// ["add 1 4", "sumPairs", "print"]); // [ 6, 6, 6 ]
// console.log(" ----- ");

// arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
// ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]); //[ -1, -2, -3, 6, 6, 6 ]