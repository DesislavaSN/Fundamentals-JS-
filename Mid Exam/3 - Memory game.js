// Problem 3 - Memory game

// dade mi 50 tochki, neshto ne mi raboti na 2rata proverka, po-doly ima kope koeto raboti

function memoryGame(input){
    let sequence = input.shift().split(" ");
    // console.log(sequence);
    // console.log(input);
    let count = 0;

    for(let i = 0; i < input.length; i++){
        let currCommand = input[i];
        if (currCommand == "end") {
            console.log(`Sorry you lose :( \n${sequence.join(" ")}`);
            break;
        }
        count++;

        let[index1, index2]= input[i].split(" ");

        if (sequence[index1] === undefined || sequence[index2] === undefined) {
            console.log("Invalid input! Adding additional elements to the board");
            sequence.splice(sequence.length/2, 0, `${-count}a`, `${-count}a` );
            // console.log(sequence);
        }else {
            if(sequence[index1] === sequence[index2]){
                console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
                // console.log(sequence);

                if(index1 > index2){
                    sequence.splice(index1, 1);
                    // console.log(sequence[index1]);
                    sequence.splice(index2, 1);
                    // console.log(sequence[index2]);
                } else {
                    sequence.splice[index2, 1];
                    // console.log(sequence[index2]);
                    sequence.splice(index1, 1);
                    // console.log(sequence[index1]);
                } 
            } else {
                console.log(`Try again!`);
            }
        }
        if (sequence.length == 0) {
            console.log(`You have won in ${count} turns!`);
            break;
        }
    }  
}


memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);

console.log(" ------- ");
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);

console.log(" ------- ");
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);


///----

// function memoryGame(array) {
//     let sequence = array[0].split(" ");
//     let commands = array.slice(1);
//     let moves = 0;

//     for (let i = 0; i < commands.length; i++) {
//         let currCommand = commands[i];
//         if (currCommand === "end") {
//             console.log(`Sorry you lose :(\n${sequence.join(" ")}`);
//             break;
//         }
//         let [index1, index2] = currCommand.split(" ")

//         moves++;

//         if (sequence[index1] == undefined || sequence[index2] == undefined) {
//             console.log(`Invalid input! Adding additional elements to the board`);
//             sequence.splice(sequence.length / 2, 0, `${-moves}a`, `${-moves}a`);
//         } else {
//             if (sequence[index1] === sequence[index2]) {
//                 console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
//                 if (index1 > index2) {
//                     sequence.splice(index1, 1)
//                     sequence.splice(index2, 1);
//                 } else {
//                     sequence.splice(index2, 1)
//                     sequence.splice(index1, 1);
//                 }
//             } else {
//                 console.log(`Try again!`);
//             }
//         }
//         if (sequence.length == 0) {
//             console.log(`You have won in ${moves} turns!`);
//             break;
//         }
//     }
// }