//3 - Heroes of Code and Logic VII
 
function heroesOfCodeAndLogic(input) {
  let numHeroes = Number(input.shift());
  let heroes = {};
 
  while (numHeroes > 0) {
    numHeroes--;
    let tokens = input.shift().split(" ");
    let nameHeroe = tokens[0];
    let hp = Number(tokens[1]);
    let mp = Number(tokens[2]);
 
    heroes[nameHeroe] = {
      hp,
      mp,
    };
  }
    // console.log(heroes);
 
  while (input[0] != "End") {
    let tokens = input.shift().split(" - ");
    let command = tokens[0];
    let name = tokens[1];
    let p1 = Number(tokens[2]);
    let p2 = tokens[3];
 
    // console.log(command, name, p1, p2);
    let heroe = heroes[name];
    // console.log(heroe);
 
    if (command == "CastSpell") {
      if (heroe.mp >= p1) {
          heroe.mp -= p1;
          console.log(`${name} has successfully cast ${p2} and now has ${heroe.mp} MP!`);
      } else {
          console.log(`${name} does not have enough MP to cast ${p2}!`);
      }
    } else if (command == "TakeDamage"){
        heroe.hp -= p1;
        if(heroe.hp > 0){
            console.log(`${name} was hit for ${p1} HP by ${p2} and now has ${heroe.hp} HP left!`);
        } else {
            delete heroes[name];
            console.log(`${name} has been killed by ${p2}!`);
        }
    } else if (command == "Recharge"){
        let mp = Math.min((200 - heroe.mp), p1)
        // console.log(mp);
        heroe.mp += mp;
        console.log(`${name} recharged for ${mp} MP!`);
    } else if (command == "Heal"){
        let hp = Math.min(100 - heroe.hp, p1);
        heroe.hp += hp;
        console.log(`${name} healed for ${hp} HP!`);
    }
  }
//   console.log(heroes);
    for (let [name, value] of Object.entries(heroes)) {
        console.log(`${name}\n  HP: ${value.hp}\n  MP: ${value.mp}`);
    }
}
 
heroesOfCodeAndLogic([
  2,
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
 
console.log("------------");
 
heroesOfCodeAndLogic([
  4,
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);

 
