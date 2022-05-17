//3. Plant Discovery

function planetDiscovery(input) {

    let numPlants = Number(input.shift());
    let collection = {};

    while(numPlants > 0){
        numPlants--;
        let tokens = input.shift().split("<->");
        let [name, rarity] = tokens;
        collection[name] = {
            rarity: Number(rarity),
            rating: [],
        }
    }

    while(input[0] != "Exhibition"){
        let tokens = input.shift().split(": ");
        let[command, parametars] = tokens;

        if (command == "Rate") {
            let [plant, rating] = parametars.split(" - ");
            if (collection[plant] != undefined) {
                collection[plant].rating.push(rating);
            } else {
                console.log("error");
            }
        } else if (command == "Update") {
            let [plant, newRarity] = parametars.split(" - ");
            if (collection[plant] != undefined) {
                collection[plant].rarity = newRarity;
            } else {
                console.log("error");
            }
        } else if (command == "Reset") {
            let plant = parametars;
            if (collection[plant] != undefined) {
                collection[plant].rating = [];  
            } else {
                console.log("error");
            }
        }  
    }

    console.log("Plants for the exhibition:");
    for (let [plant, value] of Object.entries(collection)) {
        let avgRating = 0;
        if (value.rating.length > 0) {
            for (let rate of value.rating) {
                avgRating += Number(rate);
            }
            avgRating = avgRating / value.rating.length;    
        } else {
            avgRating = 0;
        }
        console.log(`- ${plant}; Rarity: ${value.rarity}; Rating: ${avgRating.toFixed(2)}`); 
    }
}

planetDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);

console.log("----");

planetDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
