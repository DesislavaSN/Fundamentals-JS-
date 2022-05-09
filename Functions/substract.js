// Create a function sum() to calculate the sum of the first two integers and create a function subtract(), 
// which subtracts the result of the function sum() and the third integer.

function substract(num1, num2, num3) {
    function add(num1, num2) {
        return num1 + num2;
    }
 
    let res = add(num1, num2) - num3;
    return res;
}
