// 5.	Inventory

function inventory(arr) {
    let heroes = [];

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" / ");
        let [name, level, items] = [tokens[0], tokens[1], tokens.slice(2)];
        level = Number(level);
        items = items.join(", ");

        let heroeObj = {
            name: name,
            level: level,
            item: items
        }
        heroes.push(heroeObj);
    }
    let sortedHeroes = heroes.sort((a,b) => a.level - b.level);

    for(let heroe of sortedHeroes){
        console.log(`Hero: ${heroe.name}`);
        console.log(`level => ${heroe.level}`);
        console.log(`items => ${heroe.item}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);

// console.log(" ----- ");
// inventory([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ]
// );


// console.log(heroeObj);
// let valuesHeroe = Object.values(heroeObj);
// let sorted = valuesHeroe.sort((a, b) => a.level - b.level);
// // console.log(sorted, " sorted");

// for (let heroe of valuesHeroe) {
//     console.log(heroe);
// }



///  -----

 // class Heroes {
    //     constructor(name, level, items){
    //         this.name = name;
    //         this.level = level;
    //         this.items = items;
    //     }
    // }


// let newHeroe = new Heroes(name, level, items);
        // console.log(newHeroe);

        // let sortedAscending = Object.entries(newHeroe).sort((a,b) => {
        //     console.log(a[1] - b[1]);
        // });
        // console.log(sortedAscending);