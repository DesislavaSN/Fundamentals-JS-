// //3.	Address Book and Map() version:
 
function addressBook(arr){
    let listOfAddresses = {};
    let res = "";
    for (let line of arr) {
        let [name, address] = line.split(":");
        // console.log(name);
        listOfAddresses[name] = address;
    }
    // console.log(listOfAddresses); 
 
    let listKeys = Object.keys(listOfAddresses).sort((a,b) => a.localeCompare(b));
    for(let key of listKeys){
        res += `${key} -> ${listOfAddresses[key]} \n`;
    }
    return res;
}
 
console.log(addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
));
console.log(" ----- ");
console.log(addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
));
 
// //-------------- Map() --------
 
// function addressBookMap(arr){
//     let addressesList = new Map();
//     let res = "";
 
//     for (let line of arr) {
//         let [name, address] = line.split(":");
//         addressesList.set(name, address);
//         // console.log(addressesList);
//     }
 
//     let listArr = Array.from(addressesList.keys()).sort((a,b) => a.localeCompare(b));
//     // console.log(listArr);
//     for (let address of listArr) {
//         res += ` ${address} -> ${addressesList.get(address)} \n`        
//     }
//     return res;
 
// }
 
// console.log(addressBookMap(['Tim:Doe Crossing',
// 'Bill:Nelson Place',
// 'Peter:Carlyle Ave',
// 'Bill:Ornery Rd']
// ));
// console.log(" ----- ");
// console.log(addressBookMap(['Bob:Huxley Rd',
// 'John:Milwaukee Crossing',
// 'Peter:Fordem Ave',
// 'Bob:Redwing Ave',
// 'George:Mesta Crossing',
// 'Ted:Gateway Way',
// 'Bill:Gateway Way',
// 'John:Grover Rd',
// 'Peter:Huxley Rd',
// 'Jeff:Gateway Way',
// 'Jeff:Huxley Rd']
// ));