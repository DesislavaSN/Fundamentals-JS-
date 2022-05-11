//9.	*Catalogue

function catalogProblem(input) {

    let catalogue = {};
    input = input.sort((a,b) => a.localeCompare(b));

    for (let i = 0; i < input.length; i++) {
        let [nameItem, price] = input[i].split(" : ");
        catalogue[nameItem] = {
            price: Number(price),
        }  
    }

    for (let [name, value] of Object.entries(catalogue)) {
        let initialLetter = name[0][0];
        
        console.log(initialLetter);
        if (name[0][0] == initialLetter) {
            console.log("  ", name, " : ", value.price); 
        } 

    }

}

catalogProblem([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

console.log("-----");

catalogProblem(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);

// // --------------------

// function catalogProblem(arr){
//     let sorted = arr.sort((a,b) => a.localeCompare(b) );
//     // console.log(sorted);
//     for(let i = 0; i < arr.length; i++){
//         let tokens = arr[i].split(" : ");
//         let [item, price] = [tokens[0], tokens[1]];
//         let initialLetter = item[0];

//         let filtered = arr.filter(item => item[0] == initialLetter);
//         // console.log(filtered[i]);

//         console.log(`${initialLetter} \n  ${filtered}`);

//         // console.log(`${item} : ${price}`);

//     }

// }
