// A function that finds the biggest number.

function biggestOf3Nums(n1, n2, n3){
    let theBiggest = Math.max(n1, n2, n3);
    console.log(theBiggest);
}

// // 2nd option which is very long and hard to follow the logic:

// function biggestOf3Nums(n1, n2, n3){
//     let biggestNum = 0;
//     if (n1 > n2 && n1 > n3 ) {
//         biggestNum = n1;
//     } else if (n2 > n1 && n2 > n3){
//         biggestNum = n2;
//     }  else if (n3 > n1 && n3 > n2){
//         biggestNum = n3;
//     } else if (n1 === n2 && n2 === n3){
//         biggestNum = n1;
//     } else if (n1 === n2 && n2 > n3){
//         biggestNum = n1;
//     } else if(n1 === n2 & n3 > n2) {
//         biggestNum = n3;
//     }else if (n2 === n3 && n2 > n1){
//         biggestNum = n2;
//     } else if(n2 === n3 && n1 > n2){
//         biggestNum = n1;
//     } else if( n3 === n1 && n3 > n2){
//         biggestNum = n3;
//     } else if(n3 === n1 && n2 > n3){
//         biggestNum = n2;
//     }
//     console.log(biggestNum);
// }
