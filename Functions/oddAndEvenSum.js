// A function, which receives as an input a single number and returns the sum of all even and all odd digits from that number. 

function oddAndEvenSum(num) {
    let numAsString = String(num);
    let numArray = numAsString.split("");
    // console.log(numArray);
 
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 === 0) {
            evenSum += Number(numArray[i]);
        } else {
            oddSum += Number(numArray[i]);
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    // console.log(evenSum);
    // console.log(oddSum);
}
