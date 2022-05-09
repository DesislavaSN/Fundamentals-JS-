// A function that receives a single integer number n and prints nxn matrix with that number.

function nXn(num){
    let res = "";
   for(let i = 1; i <= num; i++){
        res+= num + " "  ;
    }
    for(let i = 1; i <= num; i++){
        console.log(`${res}`);
    }
}
