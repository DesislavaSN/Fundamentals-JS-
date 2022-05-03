function vacation(people, type, day) {
    let price = 0;
    switch (day) {
        case "Friday":
            if (type === "Students") {
                price = people * 8.45;
                if (people >= 30) {
                    price -= (0.15 * price);
                }
            } else if (type === "Business") {
                price = people * 10.9;
                if (people >= 100) {
                    price -= 10;
                }
            } else if (type === "Regular") {
                price = people * 15;
                if (people >= 10 && people <= 20) {
                    price -= (0.05 * price);
                }
            }
            break;
        case "Saturday":
            if (type === "Students") {
                price = people * 9.80;
                if (people >= 30) {
                    price -= (0.15 * price);
                }
            } else if (type === "Business") {
                price = people * 15.6;
                if (people >= 100) {
                    price -= 10;
                }
            } else if (type === "Regular") {
                price = people * 20;
                if (people >= 10 && people <= 20) {
                    price -= (0.05 * price);
                }
            }
            break;
        case "Sunday":
            if (type === "Students") {
                price = people * 10.46;
                if (people >= 30) {
                    price -= (0.15 * price);
                }
            } else if (type === "Business") {
                price = people * 16;
                if (people >= 100) {
                    price -=  10;
                }
            } else if (type === "Regular") {
                price = people * 22.5;
                if (people >= 10 && people <= 20) {
                    price -= (0.05 * price);
                }
            }
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
