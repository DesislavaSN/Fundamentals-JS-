// A function that receives three integers and prints the smallest number.

function smallestNumOfThree(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2;
    } else {
        return num3;
    }
}

// 2nd option:
// let smallestNumOfThree = (num1, num2, num3) => Math.min(num1, num2, num3);
