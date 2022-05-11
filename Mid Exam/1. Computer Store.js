// Problem 1 - Computer Store

function computerStore(input) {
    let typeCustomer = input.pop();
    input = input.map(Number);
    // console.log(input);
    let receipt = 0;
    // 20% of each price
    let taxesPerPart = 0.2; 
    let totalTax = 0;
    let finalPrice = 0;

    for(let i = 0; i < input.length; i++){
        
        let pricePerPart = input[i];
        if(pricePerPart < 0){
            console.log("Invalid price!");
            continue;
        }
        
        receipt += pricePerPart;
        // console.log(receipt);
        totalTax = receipt * taxesPerPart;
        finalPrice = receipt + totalTax;  
    }
    
    if (typeCustomer == "special") {
        if(finalPrice == 0){
            console.log("Ivalid order!");
        } else {
        finalPrice -= (finalPrice * 10) / 100;
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${receipt.toFixed(2)}$`);
        console.log(`Taxes: ${totalTax.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);
        }
    } else if(typeCustomer == "regular") {
        if (finalPrice == 0){
            console.log("Invalid order!");
        } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${receipt.toFixed(2)}$`);
        console.log(`Taxes: ${totalTax.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);
        }
    }    
}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);


console.log(" ---1-- ");

computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]);

console.log(" ---2-- ");

computerStore(['-1023','-23','regular']);
    
