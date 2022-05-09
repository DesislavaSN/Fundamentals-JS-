// A function that prints the first K and the last K elements from an array of numbers.

function firstAndLstKNums(numbers) {
    let k = numbers.shift();
    console.log(numbers.slice(0,k).join(" "));
    console.log(numbers.slice(-k).join(" "));
}
 
firstAndLstKNums([2, 7, 8, 9]);
