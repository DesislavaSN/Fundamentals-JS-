function bossRush(input){
    let numNames = Number(input.shift());
    let patter = /\|(?<name>[A-Z]{3,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/g;

    for (let i = 0; i < numNames; i++){
        let match = patter.exec(input[i]);
        
        if (match == null) {
            console.log("Access denied!");
        } else {
            
            console.log(`${match.groups.name}, The ${match.groups.title}`);
            console.log(`>> Strength: ${match.groups.name.length}`);
            console.log(`>> Armor: ${match.groups.title.length}`);
            match = patter.exec(input[i]);
        }
    }
}

bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#'])

console.log("----");

bossRush(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])
