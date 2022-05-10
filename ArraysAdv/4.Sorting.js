// 4.	Sorting
// A function that sorts an array of numbers so that the first element is the biggest one, 
// the second is the smallest one, the third is the second biggest one, and the fourth is the second smallest one, and so on. 

function sorting(nums) {
    let sortedNums = nums.sort((a, b) => a -b);
    // console.log(sortedNums);
    let newArrayNums = [];

    while(sortedNums.length !== 0){
        let biggestN = sortedNums.pop();
        newArrayNums.push(biggestN);
        // console.log(biggestN + ' biggest n');

        let smallestN = sortedNums.shift();
        newArrayNums.push(smallestN);
        // console.log(smallestN + ' smallest n');
        // console.log(newArrayNums, ' new array');
    }
    console.log(newArrayNums.join(" "));
}

// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 202, 15, 10, 33]);
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);

