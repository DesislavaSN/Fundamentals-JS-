//5.	Card Game

function cardGame(arr){
    let powerCard = {
        '1': 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    }

    let typeCard = {
        "C": 1,
        "D": 2,
        "H": 3,
        "S": 4,
    }

    let players = {};
    
    for (let line of arr) {
        let [personName, cards] = line.split(": ");
        cards = cards.split(", ");
        // console.log(personName);
        // console.log(cards);

        if (!players.hasOwnProperty(personName)) {
            players[personName] = new Set();
        } 
        
        for(let card of cards){
            players[personName].add(card);
        }
        
    }
    // console.log(players);

    for (let [personName, cards] of Object.entries(players)) {
        let totalPower = 0;
        for (let card of cards) {
            let powerC = powerCard[card[0]];
            let typeC = typeCard[card.slice(-1)];
            // console.log(powerC);
            // console.log(typeC);

            totalPower += powerC * typeC;
        }
        console.log(`${personName}: ${totalPower}`);
    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
);
console.log("--------");
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
);