// A a function that receives a number n.  For all numbers in the range [1…n] print the number and if it is special or not (True / False).
// A number is special when its sum of digits is 5, 7 or 11.

function specialNum(n) {
    for (let num = 1; num <= n; num++) {
        let sum = 0;
        let numToString = String(num);

        for(let k = 0; k < numToString.length; k++){
            sum += Number(numToString[k]);
        }
      
        let amazing = false;
        if (sum == 5 || sum == 7 || sum == 11) {
            amazing = true;
        }
      
        if (amazing) {
            console.log(`${num} -> True`);
        } else {
            console.log(`${num} -> False`);
        }  
    }
}
