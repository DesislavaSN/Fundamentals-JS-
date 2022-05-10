// A function that generates and prints the following sequence:
// • The first element is 1.
// • Every following element equals the sum of the previous k elements.
// • The length of the sequence is n elements.
// The input comes as two number arguments. The first element - the number, the second – the number k.
// The 2nd element (1) is the sum of the 3 elements before it, but there is only 1, so we take that. The third element is the sum of the first 2 (1 and 1), 
// and the 4th – the sum of 1, 1, and 2, and so on...


function lastKSequance(num, k) {
    let arr = [1];
    for (let i = 1; i < num; i++) {
        let lastEl = arr.slice(-k);
        let sum = 0;
        for (let element of lastEl) {
            sum += element;
        }
        arr.push(sum);
    }
    console.log(arr.join(" "));
}
