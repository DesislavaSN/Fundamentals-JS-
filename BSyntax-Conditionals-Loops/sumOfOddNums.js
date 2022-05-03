function sumOfOddNums(n) {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= 100; i += 2) {
        count++;
        if (count <= n) {
            console.log(i);
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
}
