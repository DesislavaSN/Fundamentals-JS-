//6.	Make a Dictionary

function dictionaryProblem(arr){
    let dictionary = {};
    for(let i =0; i < arr.length; i++){
        let wordDesc = JSON.parse(arr[i]);
        let [key, value] = Object.entries(wordDesc)[0];
        // console.log(key);
        // console.log(value);
        dictionary[key] = value;
        // console.log(`Term: ${key} => Definition: ${value}`);
    }
    let result = "";
    let keysArr = Object.keys(dictionary).sort((a,b) => a.localeCompare(b) );
    for(let key of keysArr){
        // console.log(keysArr);
        result += `Term: ${key} => Definition: ${dictionary[key]}\n`;
    }
    return result;
}

console.log(dictionaryProblem([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
));