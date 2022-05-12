// // 4. Storage with Map() & Object :
 
function storageMap(arr){
    let storage = new Map();
    let res = "";
    for (let line of arr) {
        let [item, quantity] = line.split(" ");
        quantity = Number(quantity)
        // console.log(item);
        // console.log(storage.has(item));
 
        if (!storage.has(item)) {
            storage.set(item, quantity);
        } else {
            let exist = storage.get(item, quantity);
            // console.log(exist);
            storage.set(item, quantity + exist);
        }
    }
    for (let [item, quantity] of storage) {
        res += `${item} -> ${quantity} \n`;
    }
    return res;
}
  
console.log(storageMap(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
));
 
console.log("-----");
 
console.log(storageMap(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
));
 
// //--- With Object ----------------------
 
// function storageObj(arr){
//     let storage = {};
//     let res = "";
//     for (let line of arr) {
//         let [item, quantity] = line.split(" ");
//         quantity = Number(quantity);
 
//         if(!storage.hasOwnProperty(item)){
//             storage[item] = quantity;
//         } else {
//             let exist = storage[item] ;
//             // console.log("exist ", exist);
//             storage[item] = quantity + exist;
//         }
//     }
//     for (let item in storage) {
//         res += `${item} -> ${storage[item]} \n`;
//     }
//     return res;
// }
 
// console.log(storageObj(['tomatoes 10',
// 'coffee 5',
// 'olives 100',
// 'coffee 40']
// ));
 
// console.log(storageObj(['apple 50',
// 'apple 61',
// 'coffee 115',
// 'coffee 40']
// ));