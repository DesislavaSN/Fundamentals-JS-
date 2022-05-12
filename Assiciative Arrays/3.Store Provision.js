//3.	Store Provision
 
function storeProvision(inStockPr, orderedPr){
 
    let inStoreProducts = {};
 
    for(let i = 0; i < inStockPr.length; i+=2){
        let nameItem = inStockPr[i];
        // console.log(nameItem);
        // console.log(inStockPr[i+1]);
        inStoreProducts[nameItem] = Number(inStockPr[i+1]);
    }
    // console.log(inStoreProducts);
 
    for(let i = 0; i < orderedPr.length; i+=2){
        let nameItem = orderedPr[i];
        if (!inStoreProducts.hasOwnProperty(nameItem)) {
            inStoreProducts[nameItem] = 0;
        }
        inStoreProducts[nameItem] += Number(orderedPr[i+1]);
    }
 
    for (let product in inStoreProducts) {
        console.log(`${product} -> ${inStoreProducts[product]}`);
    }
}
 
storeProvision(
['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
 
console.log(" ----- ");
storeProvision(
['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
);
 
 
//---
 
// function storeProvision(currStocks, orderedProducts){
//     let productsInStock = {};
 
//     for(let i = 0; i < currStocks.length; i+=2){
//         let currItem = currStocks[i];
//         productsInStock[currItem] = Number(currStocks[i+1]);
//     }
 
//     for(let i = 0; i < orderedProducts.length; i+=2){
//         let currItem = orderedProducts[i];
//         if (!productsInStock.hasOwnProperty(currItem)) {
//             productsInStock[currItem] = 0;
//         }
//         productsInStock[currItem] += Number(orderedProducts[i+1]);
 
//     }
 
//     for(let product in productsInStock){
//         console.log(`${product} -> ${productsInStock[product]}`);
//     }
 
// }