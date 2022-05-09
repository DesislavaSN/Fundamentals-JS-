// A function, which receives an array of positive integers and checks if each integer is a palindrome or not.

function palindroms(arr) {
    for (let k = 0; k < arr.length; k++) {
        let currentNum = String(arr[k]);
        // console.log(currentNum);
        let firstIndex = currentNum[0];
        let lastIndex = currentNum[currentNum.length - 1];
        // console.log(firstIndex + " first i");
        // console.log(lastIndex + " last i");
 
        if (firstIndex !== lastIndex) {
            console.log("false");
        } else {
            console.log("true");
        }
    }
}
