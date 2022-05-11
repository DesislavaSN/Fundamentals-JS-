//Problem 1 - Counter-Strike

function counterStrike(input){
    let energy = Number(input[0]);
    let commands = input.slice(1);
    let wonBattles = 0;

    for(let i = 0; i < commands.length; i++){
        if (commands[i] == "End of battle") {
            return `Won battles: ${wonBattles}. Energy left: ${energy}`;
        }
        
        let distance = Number(commands[i]);
        console.log(distance);
        
        if (energy >= distance) {
            wonBattles++;
            energy -= commands[i];
            
            if (wonBattles % 3 == 0) {
                energy += wonBattles;
            }
        } else {
            return `Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`;
            
        }
    }
}


console.log(counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"]));


// console.log(" ---- ");

console.log(counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
);

///---

// function counterStrike(input){
    //     let initialEnergy = Number(input.shift(","));
    //     // let endButtle = input.pop();
    //     let distances = input;
    //     // console.log(initialEnergy);
    //     // console.log(endButtle);
    //     console.log(distances, " distances");
    //     let wonBattles = 0;
    
    //     console.log(input, " input");
    
    //     for(let i = 0; i < distances.length; i++){
    
    //         initialEnergy -= distances[i];
    //         wonBattles++;
    //         if (wonBattles % 3 == 0) {
    //             initialEnergy += wonBattles;
    //         }
            
    //     }
    //     // console.log(initialEnergy);
    //     // console.log(wonBattles);
    
// }
    



//// ----

// function counterStrike(input){

//     let initialEnergy = Number(input.shift());
//     console.log(input, " input");
//     let distances = input.slice(0, -1).map(Number);
//     console.log(distances , " distances");
//     let wonBattles = 0;
    
//     while(input !== "End of battle"){
//         for(let i = 0; i < distances.length; i++){
//             if (initialEnergy < 0) {
//                 console.log(`Not enough energy! Game ends with ${wonBattles} won battles and${initialEnergy} energy.`);
//                 break;
//             }
//             wonBattles++;

//             initialEnergy -= distances[i];
//             if (wonBattles % 3 == 0) {
//                 initialEnergy += wonBattles;
//             }
           
                    
//         }
        
//         console.log(initialEnergy);
//         console.log(wonBattles);
//     }

// }
