//1.	Phone Book & phone book with Map()
 
function phoneBookPr(arr){
    let phoneBook = {};
    let res = "";
    for (let line of arr) {
        let [name, phone] = line.split(" ");
        phoneBook[name] = phone; 
    }
 
    for (let person in phoneBook) {
        res += `${person} -> ${phoneBook[person]} \n` 
    }
    return res;
 
    // sorted Alphabetical order:
    // let allKeys = Object.keys(phoneBook).sort((a,b) => a.localeCompare(b));
    // for (let person of allKeys) {
    //     // console.log(person);
    //     res += `${person} -> ${phoneBook[person]} \n` 
    // }
    // return res;
}
 
console.log(phoneBookPr(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
));
 
console.log( phoneBookPr(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
));
