// A function that processes the elements in an array one by one and produces a new array.
// Prepend each negative element at the front of the array (as the first element) and append each positive (or 0) element at the end of the array.

function negativeOrPositiveNum(arr){
    let newArr = [];
    for (let element of arr) {
        element = Number(element);
        if (element < 0) {
            newArr.unshift(element);
        } else {
            newArr.push(element);
        }
    }
    console.log(newArr.join('\n'));
}
