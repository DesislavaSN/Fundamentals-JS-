// A function that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

function evenAndOddSubstraction(arr){
    let sumEven = 0;
    let sumOdd = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }
    let result = sumEven - sumOdd;
    console.log(result);
}
