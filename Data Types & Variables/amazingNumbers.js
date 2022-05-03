//Check and print if a number is amazing or not into the following format: 
//	"{number} Amazing? {True or False}"
//An amazing number includes the digit 9 into the sum of its digits. 

function amazingNumbers(num){
    let numToString = String(num);
    let sum = 0;
    for(let i = 0; i < numToString.length; i++){
        sum += Number(numToString[i]);
    }

    let sumToString = String(sum);
    let amazing = "False";
    for(let k = 0; k < sumToString.length; k++){
        if (sumToString[k] === "9") {
            amazing = "True";
        }
    }
    console.log(`${num} Amazing? ${amazing}`);
}
