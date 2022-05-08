// a function, which prints all unique pairs in an array of integers whose sum is equal to a given number. 

function magicSum(arr, num) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let k = i + 1; k < arr.length; k++) {
            sum = arr[i] + arr[k];
            if (sum === num) {
                console.log(`${arr[i]} ${arr[k]}`);
            }
        }
    }
}
