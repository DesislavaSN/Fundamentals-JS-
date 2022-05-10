// A function that prints the two smallest elements from an array of numbers.

function smallestTwoNums(arr){
    let res = arr.sort((a,b) => a - b).slice(0,2).join(" ");
    console.log(res);
}
