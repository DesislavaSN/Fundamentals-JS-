//2. Destination Mapper 

// 80/100 !??!?
 
function destinationMapper(input){
 
    let patter = /([=\/])(?<place>[A-Z][A-Za-z]{2,})\1/g;
    let match = patter.exec(input);
    let destinations = [];
    let travelPoints = 0;
 
    while (match != null){
        destinations.push(match.groups.place);
        travelPoints += match.groups.place.length;
        match = patter.exec(input);
    }
 
    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);   
}
 
destinationMapper("=HaWAi=/CypRus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log("----");
destinationMapper("ThisIs some InvalidInput");
 
