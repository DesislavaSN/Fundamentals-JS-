//1.	Train
// As an input is given an array of strings.
// The first element will be a string containing wagons (numbers). 
// Each number inside the string represents the number of passengers that are currently in a wagon.
// The second element in the array will be the max capacity of each wagon (single number).
// The rest of the elements will be commands in the following format:
// • Add {passengers} – add a wagon to the end with the given number of passengers.
// • {passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)

 
function train(input) {
    let wagons = input.shift().split(" ").map(Number);
    let capacityOfWagon = Number(input.shift());
 
    for (let i = 0; i < input.length; i++) {
        let passengers = input[i].split(" ");
        let command;
        if (passengers.length > 1) {
            command = passengers[0];
            passengers = Number(passengers[1]);
        }
        passengers = Number(passengers);
        // console.log(command + " command");
        // console.log(passengers + " passengers");
        if (command == "Add") {
            wagons.push(passengers);
        } else if (command == undefined) {
            // console.log(passengers + ' passengers');
            for(let i = 0; i < wagons.length; i++){
                // console.log(wagons[i]);
                if (wagons[i] + passengers <= capacityOfWagon) {
                    wagons[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
 
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
)
console.log(" ------- ");
 
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);