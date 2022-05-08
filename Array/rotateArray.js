// A function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 
// The last element of the array is the amount of rotation you need to perform.

function rotateArray(arr){
    let rotations = arr.pop();
    let newArray = arr;

    for(let i = 0; i < rotations; i++){
        let lastEl = arr.pop();
        newArray.unshift(lastEl);
    }
    console.log(newArray.join(" "));
