// A function that calculates and print the value of a number raised to a given power:

function mathPower(n, power){
    let res = 1;
    for(let i = 1; i <= power; i++){
        res *= n;
    }
    console.log(res);
}

// // 2nd option:
// function mathPower(num,power){
//     let res = Math.pow(num, power);
//     console.log(res);
// }
