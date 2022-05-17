//Problem 1. Secret Chat
 
function secretChat(input){
 
    let message = input.shift();
 
    while (input[0] != "Reveal"){
        let line = input.shift().split(":|:");
        let command = line[0];
        // console.log(command);
 
        if (command == "ChangeAll") {
            let [letter, replacement] = [line[1], line[2]];
            for(let i = 0; i < message.length; i++){
                let onIndex = message.indexOf(letter, i);
                message = message.replace(letter, replacement);
            }
            console.log(message);
        } else if (command == "Reverse"){
            let substring = line[1];
            // console.log(substring, " ---");
            let onIndex = message.indexOf(substring);
            if (onIndex != -1) {
                let leftPart = message.slice(0, onIndex);
                let rightPart = message.slice(onIndex + substring.length);
                message = leftPart + rightPart + substring.split("").reverse().join("");
                console.log(message);
            } else {
                console.log("error");
            }
        } else if (command == "InsertSpace"){
            let insertOnIndex = line[1];
            // console.log(insertOnIndex);
            let beginningMes = message.substring(0, insertOnIndex);
            let endMes = message.substring(insertOnIndex);
            // console.log(beginningMes);
            // console.log(endMes);
 
            message = beginningMes + " " + endMes;
            console.log(message);
        }
    }
    console.log(`You have a new text message: ${message}`);
}
 
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
 
console.log("----------");
 
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
 
// // -----------
 
// message = message.replace(substring,revercedPart);
