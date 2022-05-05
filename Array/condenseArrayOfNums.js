// A function, which receives an array of numbers, and condenses them by summing adjacent couples of elements until a single number is obtained. 

function condenseArrayOfNums(arr) {
    let condensed = [];
    for (let num of arr) {
        condensed.push(num);
    }
    while(condensed.length > 1){
        let temp = [];
        for(let i = 0; i < condensed.length - 1; i++){
            temp.push(condensed[i] + condensed[i + 1]);
        }
        condensed = temp;
    }
    console.log(condensed[0]);
}
