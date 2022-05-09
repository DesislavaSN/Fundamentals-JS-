// A function that receives some commands. Depending on the command, add or subtract a percentage of how much the car is cleaned or dirty. Start from 0.

function carWash(arr) {
    let value = 0;
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if (command == "soap") {
            value += 10;
        } else if (command == "water") {
            value += (value * 20) / 100;
        } else if (command == "vacuum cleaner") {
            value += (value * 25) / 100;
        } else {
            value -= (value * 10) / 100;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
 
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']); 
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
