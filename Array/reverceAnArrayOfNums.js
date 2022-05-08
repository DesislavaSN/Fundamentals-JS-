// A function, which receives a number "num" and an array of elements. Your task is to create a new array with n numbers, reverse it 
// and print its elements on a single line.

function reverceAnArrayOfNums(num, array){
    let newArray = [];
    for(let i = 0; i < num; i++){
        newArray.push(array[i]);
    }

    let reverce = [];
    for(let k = newArray.length; k >= 0; k--){
        reverce.push(newArray[k]);
    }
    console.log(reverce.join(" "));
}
