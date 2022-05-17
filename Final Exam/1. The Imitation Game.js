//1. The Imitation Game

function imitationGame(input){
    let message = input.shift();

    while(input[0] != "Decode"){
        let line = input.shift().split("|");
        let command = line[0];
    
        if (command == "ChangeAll"){ 
            let [letter, replacement] = [line[1], line[2]];
            let index = 0;
            while(message.indexOf(letter, index) != -1){
                message = message.replace(letter, replacement);
                // console.log(message);
            }
        } else if (command == "Insert"){
            let [index, value] = [line[1], line[2]];
            // console.log(index);
            // console.log(value);
            let newMessage = message.substring(0, index).concat(value);
            // console.log(newMessage);
            let lastLetters = message.substring(index);
            // console.log(lastLetters);
            message = newMessage + lastLetters;
            // console.log(message);
        } else if (command == "Move") {
            let numOfMovies = line[1];
            let numLetters = message.substring(0,numOfMovies);
            let lastLetters = message.substring(numOfMovies);
            message = lastLetters + numLetters; 
        }
    }
    console.log(`The decrypted message is: ${message}`);
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);

console.log("------------");

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])

// // -------------------------

