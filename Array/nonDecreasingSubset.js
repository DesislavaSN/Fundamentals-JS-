// A function that extracts only those numbers that form a non-decreasing subset. 
// You start from the first element and continue to the end of the given array of numbers. 
// Any number which is LESS THAN the current biggest one is ignored, 
// alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number. 

function nonDecreasingSubset(arr){
    let max = arr[0];
    let filtered = arr.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    })
    console.log(filtered.join(" "));   
}
