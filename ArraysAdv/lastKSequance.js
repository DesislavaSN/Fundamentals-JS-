// A function that generates and prints the following sequence:
// •	The first element is 1.
// •	Every following element equals the sum of the previous k elements.
// •	The length of the sequence is n elements.
// The input comes as two number arguments. The first element - the number, the second – the number k.


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
