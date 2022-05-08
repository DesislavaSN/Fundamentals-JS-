// A function, which receives a number and prints the corresponding name - the day of the week.

function dayOfWeek(num){
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (num >=0 && num <= 7) {
        console.log(days[num - 1]);
    } else {
        console.log("Invalid day!");
    }
}
