// A function that calculates and prints the sum of the first and the last elements in an array.

function sumFirstAndLast(arr){
    let firstEl = arr.shift();
    let lastEl = arr.pop();
    console.log(Number(firstEl) + Number(lastEl));
}
