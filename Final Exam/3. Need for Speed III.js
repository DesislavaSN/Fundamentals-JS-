// 3. Need for Speed III
 
function needForSpeed3(input) {
 
    let numCars = Number(input.shift());
    let cars = {};
 
    while(numCars > 0){
        numCars--;
        let tokens = input.shift().split("|");
        let carName = tokens[0];
        let mileage = Number(tokens[1]);
        let fuel = Number(tokens[2]);
 
        cars[carName] = {
            mileage,
            fuel,
        }
    }
 
    while(input[0] != "Stop"){
        let tokens = input.shift().split(" : ");
        // console.log(tokens);
        let command = tokens[0];
        let name = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = Number(tokens[3]);
 
        // console.log(command, name, p1, p2);
        let car = cars[name];
 
        if (command == "Drive") {
            if (car.fuel >= p2) {
                car.mileage += p1;
                car.fuel -= p2; 
                // console.log(car.fuel);
                // console.log(car.mileage);
                console.log(`${name} driven for ${p1} kilometers. ${p2} liters of fuel consumed.`);
            } else {
                console.log("Not enough fuel to make that ride");
            }
            if (car.mileage >= 100000){
                delete cars[name];
                console.log(`Time to sell the ${name}!`);
            } 
        } else if (command == "Refuel") {
            let topUpFuel = Math.min((75 - car.fuel), p1);
            car.fuel += topUpFuel;
            console.log(`${name} refueled with ${topUpFuel} liters`);
        } else if (command == "Revert") {
            car.mileage -= p1;
            console.log(`${name} mileage decreased by ${p1} kilometers`);
            // console.log(car.mileage -= p1);
            if (car.mileage < 10000) {
                car.mileage = 10000;
                // console.log(` --- CAR MILAGE SET IT UP TO 10 000 !!!`);
            }
        }
    }
 
    for (let [name, value] of Object.entries(cars)) {
        console.log(`${name} -> Mileage: ${value.mileage} kms, Fuel in the tank: ${value.fuel} lt.`);
    }
}
 
needForSpeed3([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
 
console.log("----");
 
needForSpeed3([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);