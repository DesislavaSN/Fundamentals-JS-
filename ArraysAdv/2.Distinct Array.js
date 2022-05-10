// //2. Distinct Array 
// A function that removes all repeating elements from an array. 

function distinctArray(numbers){
    let newNumbers = [];
    for (let num of numbers) {
        // console.log(num);
        if (newNumbers.includes(num) == false) {
            newNumbers.push(num);
        }        
    }
    console.log(newNumbers.join(" "));
}

distinctArray([1, 2, 3, 4]);                 // 1 2 3 4	        (No repeating elements)
distinctArray([7, 8, 9, 7, 2, 3, 4, 2, 2,1]); //7 8 9 2 3 4 1	    (7 and 2 are already present in the array remove them)
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);	// 20 8 12 13 4 5	(4 and 8 are already present in the array remove them)



