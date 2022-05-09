// A function that calculates the total price of an order.
// The prices for a single piece of each product are: 
// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00


function orders(product, quantity){
    let productPrice = 0;
    switch(product){
        case "coffee": productPrice = 1.5; break;
        case "water": productPrice = 1; break;
        case "coke": productPrice = 1.4; break;
        case "snacks": productPrice = 2; break;
        default: "This product does not exist"; break;
    }
    let totalPrice = (quantity * productPrice).toFixed(2);
    return totalPrice;
}
