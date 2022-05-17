// 3. P!rates

function piratesProblem(input) {
  let listOfCities = {};

  while (input[0] != "Sail") {
    let [city, population, gold] = input.shift().split("||");
    population = Number(population);
    gold = Number(gold);

    if (listOfCities[city] != undefined) {
      listOfCities[city].population += population;
      listOfCities[city].gold += gold;
    } else {
      listOfCities[city] = {
        population,
        gold,
      };
    }
  }

  let sailCom = input.shift();

  while (input[0] != "End") {
    let [action, town, p1, p2] = input.shift().split("=>");
    p1 = Number(p1);
    p2 = Number(p2);

    let currTown = listOfCities[town];

    if (action == "Plunder") {
      // console.log(currTown);
      currTown.population -= p1;
      currTown.gold -= p2;
      console.log(
        `${town} plundered! ${p2} gold stolen, ${p1} citizens killed.`
      );
      if (currTown.population == 0 || currTown.gold == 0) {
        delete listOfCities[town];
        console.log(`${town} has been wiped off the map!`);
      }
    } else if (action == "Prosper") {
      if (p1 < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        currTown.gold += p1;
        console.log(
          `${p1} gold added to the city treasury. ${town} now has ${currTown.gold} gold.`
        );
      }
    }
  }

  if (Object.entries(listOfCities).length > 0) {
    console.log(
      `Ahoy, Captain! There are ${
        Object.entries(listOfCities).length
      } wealthy settlements to go to:`
    );
    for (let [town, values] of Object.entries(listOfCities)) {
      // console.log(values.population);
      console.log(
        `${town} -> Population: ${values.population} citizens, Gold: ${values.gold} kg`
      );
    }
  } else {
      console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
  }
}

piratesProblem([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
console.log("----");
piratesProblem([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
