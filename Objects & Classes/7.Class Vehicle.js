//7.	Class Vehicle

class Vehicle {
    constructor(type, model, { engine, power }, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: engine,
            power: power,
            quality: engine * power,
        }
        this.fuel = fuel;
    }
    drive(fuelLoss) {
        return this.fuel -= fuelLoss;
    }
}


let parts = { engine: 9, power: 500 };
let vehicle = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20); // output: 820
console.log(vehicle.fuel);
