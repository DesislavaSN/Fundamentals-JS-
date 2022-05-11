//Problem 3 - Numbers

function numbers(input){
    let nums = input.split(" ").map(Number);
    let averageSum = 0;
    for (let num of nums) {
        averageSum += num;
    }
    averageSum /= (nums.length);
    // console.log(averageSum);

    let greaterNums = nums.filter(el => el > averageSum);
    
    if (greaterNums == 0) {
        console.log("No");
    } else {
        greaterNums.sort((a,b) => b - a);
        greaterNums = greaterNums.slice(0,5);
        console.log(greaterNums.join(" "));
    } 
}

numbers('10 20 30 40 50');
console.log(" ----- ");

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
console.log(" ----- ");

numbers('1');
console.log(" ----- ");

numbers('-1 -2 -3 -4 -5 -6');
