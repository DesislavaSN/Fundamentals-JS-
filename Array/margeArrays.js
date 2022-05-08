// A function, which receives two string arrays and merge them into a third array.  
// •	If the index of the element is even, add into the third array the sum of both elements at that index
// •	If the index of the element is odd, add the concatenation of both elements at that index

function margeArrays(arr1, arr2) {
    let newArray = [];
    let evenSum = 0;
    let oddConcat = "";
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            evenSum = Number(arr1[i]) + Number(arr2[i]);
            newArray.push(evenSum);
        } else {
            oddConcat = arr1[i] + arr2[i];
            newArray.push(oddConcat);
        }
    }
    console.log(newArray.join(" - "));
}
