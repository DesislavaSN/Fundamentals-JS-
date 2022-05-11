//Problem 2. Mu Online
 
function muOnline(input) {
    let initialHealth = 100;
    bitcoins = 0;
    let tokens = input.split("|");
    let isCompleted = true;
    let tempHealth = 100;
 
    for (let i = 0; i < tokens.length; i++) {
        // console.log(tokens[i]);
        let [command, number] = tokens[i].split(" ");
        number = Number(number);
        // console.log(command, " command");
        // console.log(number, "  number");
 
        if (command == "potion") {
            if (initialHealth + number < 100) {
                initialHealth += number;
            } else if (initialHealth + number > 100) {
                number = 100 - initialHealth;
                initialHealth += number;
            } else if (initialHealth + number == 100) {
                number = 0;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        } else if (command == "chest") {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            initialHealth -= number;
            if (initialHealth > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                isCompleted = false;
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }
    }
    if (isCompleted) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${initialHealth}`);
    }
}
 
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
 
console.log(" ------ ");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
 

 
 