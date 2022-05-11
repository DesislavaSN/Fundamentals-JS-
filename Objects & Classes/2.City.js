//2.	City
 
function cityInfo(city){
    let keys = Object.keys(city);
    // console.log(keys); // array of all keys of the object
 
    for (let key of keys) {
        console.log(`${key} -> ${city[key]}`);
    }
 
}
 
cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
console.log(" ---- ");
cityInfo({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)