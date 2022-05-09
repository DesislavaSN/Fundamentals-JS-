// A function that visualizes a loading bar depending on the number (between 0 and 100, which is divided by 10),  you have received in the input.

function loadingBar(num) {
    let charCodeProc = String.fromCharCode(37);
    let charCodePoint = String.fromCharCode(46);
    let res = "";
    let pointRes = "";
    for (let i = 10; i <= num; i += 10) {
        res += charCodeProc;
    }
    // console.log(charCodeProc);
 
    for (let k = num; k < 100; k += 10) {
        pointRes += charCodePoint;
    }
    // console.log(pointRes);
 
    if (num < 100) {
        console.log(`${num}% [${res}${pointRes}]`);
        console.log("Still loading...");
    } else {
        console.log(`${num}% Completed!`);
        console.log(`[${res}]`);
    }
}
