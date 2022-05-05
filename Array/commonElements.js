// A function, which prints common elements in two string arrays. Print all matches on separate lines.

function commonElements(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        for(let k = 0; k < arr2.length; k++){
            if (arr1[i] === arr2[k]) {
                console.log(arr1[i]);
            }
        }
    }
}
