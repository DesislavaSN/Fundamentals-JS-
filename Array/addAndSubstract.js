// A function, which changes the value of odd and even numbers in an array of numbers. 
// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position


function addAndSubstract(arr){
    let originalArrSum = 0
    let newArrSum = 0;
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        originalArrSum += arr[i];
        // console.log(arr[i]);
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i] + i);
        } else {
            newArr.push(arr[i] - i);
        }
    }
    for(let i = 0; i < newArr.length; i++){
        newArrSum += newArr[i];
    }
    console.log(newArr);
    console.log(originalArrSum);
    console.log(newArrSum);
}
