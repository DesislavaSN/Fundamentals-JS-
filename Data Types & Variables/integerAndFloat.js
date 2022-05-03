// You will receive 3 numbers. Your task is to find their sum and print result to the console in the following format:
// `{sum} - {type of the number (Integer or Float)}`

function floatOrInteger(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let sumToString = String(sum);
    let integerNum = "Integer";

    for(let i = 0; i < sumToString.length; i++){
        if (sumToString[i] === ".") {
            integerNum = "Float";
        } 
    }
    console.log(`${sum} - ${integerNum}`);
}
