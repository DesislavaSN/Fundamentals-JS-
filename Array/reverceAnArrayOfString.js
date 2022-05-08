// A function, which receives an array of strings. Your task is to reverse and print its elements on a single line.

function reverceAnArrayOfString(arr){
    for(let i = 0; i < arr.length / 2; i++){
        let k = arr.length - 1 - i;
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp
    }
    console.log(arr.join(" "));
}
