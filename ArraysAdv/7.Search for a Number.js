//7.	Search for a Number
/* You will receive two arrays of integers. The second array is containing exactly three numbers. 
The first number represents the number of elements you have to take from the first array (starting from the first one).
The second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
The third number is the number we search in our collection after the manipulations. 
As output print how many times that number occurs in our array.
 */

function searchForNum(integers, arr){
    let countEls = arr[0];
    let deleteEls = arr[1];
    let specialNum = arr[2];
    integers = integers.slice(0, countEls);
    integers.splice(0, deleteEls);
    let newIntegers = integers.filter(el => el == specialNum);
    console.log(`Number ${specialNum} occurs ${newIntegers.length} times.`);
}

searchForNum([5, 2, 3, 4, 1, 6],[5, 2, 3]);
searchForNum([7, 1, 5, 8, 2, 7, 5],[3, 1, 5]);
