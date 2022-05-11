// hunting Games 100 points

function huntingGames(input){
    let days = Number(input.shift());
    let players = Number(input.shift());
    let groupsEnergy = Number(input.shift());
    let waterPerDay = Number(input.shift());
    let foodPerDay = Number(input.shift());
    let energyLoss = input.map(Number);
    // console.log(energyLoss);

    let waterTotal = days * players * waterPerDay;
    let foodTotal = days * players * foodPerDay;
    // console.log(foodTotal);
    let count = 0;
    let ready = true;

    for(let i = 0; i < energyLoss.length; i++){
        count++;
        groupsEnergy -= energyLoss[i];
        // console.log(groupsEnergy);
        if (groupsEnergy <= 0) {
            ready = false;
            console.log(`You will run out of energy. You will be left with ${foodTotal.toFixed(2)} food and ${waterTotal.toFixed(2)} water.`);
            break;
        }
        if (count % 2 == 0) {
            groupsEnergy *= 1.05;
            waterTotal *= 0.7;
        }

        if (count % 3 == 0) {
            groupsEnergy *= 1.10;
            foodTotal -= (foodTotal / players);
        }

    }
    if(ready){
        console.log(`You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(2)} energy!`);
    }
}

huntingGames(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"])


huntingGames(["10","7","5035.5","11.3","7.2",
"942.3",
"500.57",
"520.68",
"540.87",
"505.99",
"630.3",
"784.20",
"321.21",
"456.8",
"330"])
