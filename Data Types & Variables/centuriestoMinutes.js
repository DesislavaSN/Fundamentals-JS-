// A function that receives a number of centuries and converts it to years, days, hours, and minutes. 
// (Assume that a year has 365.2422 days on average (the Tropical year))

funcion centuriesToMins(centuries){
    let daysIn1Year = 365.2422;
    let years = centuries * 100;
    let days = Math.trunc(years * daysIn1Year);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
