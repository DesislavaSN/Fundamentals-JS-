// 2.	Towns
 
function townProblem(arr){
    for(let i = 0; i < arr.length; i++){
        let tokens = arr[i].split(" | ");
        // console.log(tokens);
        let [town, latitude, longitude] = [tokens[0], tokens[1], tokens[2]];
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
 
        let townObj = {
            town: town,
            latitude: latitude,
            longitude: longitude,
        }
        console.log(townObj);
    }
}
 
 
townProblem([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);
 
townProblem(['Plovdiv | 136.45 | 812.575']);
