// A function that receives a string and a repeat count n. 

function repeatString(string, repeatNum){
    let res = "";
    for(let i = 0; i < repeatNum; i++){
        res += string;
    }
    return res;
}


// 2nd option:
// function repeatString(string, repeatNum){
//     return string.repeat(repeatNum);
// }
