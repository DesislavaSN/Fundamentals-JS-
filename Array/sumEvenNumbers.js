// A function, which receives an array of strings, parse them into numbers, and sum only the even numbers.

tion sumEvenNumbers(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        let stringToNums = Number(arr[i]);
        if (stringToNums % 2 == 0) {
            sum += stringToNums;
        }
    }
    console.log(sum);
}
