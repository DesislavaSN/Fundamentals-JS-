// A function that prints the elements at odd positions from the array, doubled and in reverse order.

function processOddNums(arr) {
    let res = arr
        .filter((x, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(" ");
    console.log(res);
}
