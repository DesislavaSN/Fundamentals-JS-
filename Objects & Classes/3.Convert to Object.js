// 3.	Convert to Object
 
function convertJsonToObj(objAsString){
    let personObj = JSON.parse(objAsString);
    let keys = Object.keys(personObj);
    for(let key of keys){
        console.log(`${key}: ${personObj[key]}`);
    }
}
 
convertJsonToObj('{"name": "George", "age": 40, "town": "Sofia"}');
console.log(" ---- ");
convertJsonToObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
 

// // short version of the above:
// function convertJsonToObj2(ref){
//     let personObj = JSON.parse(ref);
//     for(let key of Object.keys(personObj)){
//         console.log(`${key}: ${personObj[key]}`);
//     }
// }
 
// console.log(" ---- ");
// convertJsonToObj2('{"name": "Desi", "age": 35, "town": "Velio Tarnovo"}');
// console.log(" ---- ");
// convertJsonToObj2('{"name": "Ivo", "age": 42, "town": "London"}');