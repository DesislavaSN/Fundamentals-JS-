// A function that finds all the top integers in an array. A top integer is an integer, which is bigger than all the elements to its right. 

function maxNumbers(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let lastEl = arr[arr.length - 1];
        //console.log(lastEl);
        let element = arr[i];
        // console.log(element);
        if (lastEl <= element) {
            // console.log(element);
            if (newArr.includes(element) === false ) {
                newArr.push(element);
                // console.log(newArr);
            }
        }
    }
    console.log(newArr.join(" "));
}
