// A function that receives an array and the number of rotations you have to perform. 
// Note: Depending on the number of rotations, the first element goes to the end.

function arrayRotation(arr, rotationNum) {
    for(let i = 0; i < rotationNum; i++){
        let firstEl = arr[0];
        arr.shift();
        arr.push(firstEl);
    }
    console.log(arr.join(" "));
} 
