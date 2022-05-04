// A function which finds the sum of a given number.

function sumDigits(num){
    let numToString = String(num);
    let sum = 0;
    for(let i = 0; i < numToString.length; i++){
        sum += Number(numToString[i]);
    }
    console.log(sum);
}
