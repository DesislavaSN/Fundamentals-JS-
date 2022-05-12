//4.	Party Time

function partyTime(arr){
    let vipList = {};
    let regularList = {};
    
    while (arr[0] !== "PARTY"){
        let currGuest = arr.shift();
        
        // - tova pravi proverka dali 1viq symbol ot el-ta e chislo ili bykva, vrushta True or False! 
        // if(Number.isNaN(Number(currGuest[0]))){ ... }
        if (currGuest.charCodeAt(0) >= 48 && currGuest.charCodeAt(0) <= 57) {
            vipList[currGuest] = "VIP";
        } else {
            regularList[currGuest] = "regular";
        }
    }
    
    for(let i = 1; i < arr.length; i++){
        let arrivedG = arr[i];
        if (vipList.hasOwnProperty(arrivedG) || regularList.hasOwnProperty(arrivedG)) {
            delete vipList[arrivedG];
            delete regularList[arrivedG];
        }
    }

    let sizeVip = Object.keys(vipList).length;
    let sizeRegular = Object.keys(regularList).length;

    console.log(sizeVip + sizeRegular);
    for (let guest in vipList) {
        console.log(guest);
    }
    for (let guest in regularList) {
        console.log(guest);
    }
    
}

partyTime([
'7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);

console.log("-------------");
partyTime([
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]);

