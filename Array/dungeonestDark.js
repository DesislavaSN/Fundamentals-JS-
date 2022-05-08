// You have initial health 100 and initial coins 0. You will be given a string, representing the dungeon's rooms. 
// Each room contains - an item or a monster, and a number. There are 3 options:
// - if the first part is "Potion" you can Health; 
// - if the fisrt part is Chest you ;
// - if Facing a monster and fight with it.

function dungeonestDark(array) {
    let rooms = array[0].split("|");
    // console.log(rooms);
    let health = 100;
    let coins = 0;
    let isFinished = true;

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(" ");
        // console.log(room[0]);
        if (room[0] === "potion") {
            let currentHealth = Number(room[1]);
            if (health <= 100) {
                if (health + currentHealth >= 100) {
                    currentHealth = 100 - health;
                    health = 100;
                } else {
                    health += currentHealth;
                }
                console.log(`You healed for ${currentHealth} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        } else if (room[0] === "chest") {
            let currentCoins = Number(room[1]);
            console.log(`You found ${currentCoins} coins.`);
            coins += currentCoins;
        } else {
            let monster = room[0];
            let attackMonstar = Number(room[1]);
            health -= attackMonstar;
            if (health > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${i + 1}`);
                isFinished = false;
                break;
            }
        }
    }
  
    if (isFinished) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
