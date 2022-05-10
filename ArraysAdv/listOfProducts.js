// A function that prints a numbered array of all the products ordered by name.

function listOfProducts(products){
    let orderedPr = products.sort();
    for(let i = 0; i < orderedPr.length; i++){
        console.log(`${i+1}.${orderedPr[i]}`);
    }
}
