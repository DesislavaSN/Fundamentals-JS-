// A function that finds the longest sequence of equal elements in an array of numbers. 

function maxSequenceOfEqualElments(arr) {

    let newArray = [];
    let tempArray = [];

    for(let i = 0; i < arr.length; i++){
        tempArray = [];
        for(let k = i; k < arr.length; k++){
            if (arr[i] === arr[k]) {
                tempArray.push(arr[i]);
                // console.log(tempArray);
            } else {
                break;
            }
        }
        if (tempArray.length > newArray.length) {
            newArray = tempArray;
        }
    }
    console.log(newArray.join(" "));
}
