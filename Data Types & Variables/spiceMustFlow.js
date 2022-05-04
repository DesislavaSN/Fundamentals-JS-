// A program that calculates the total amount of spice that can be extracted from a source.
// The source has a starting yield, which indicates how much spice can be mined on the first day.
// After it has been mined for a day, the yield drops by 10, meaning on the second day it’ll produce 10 less spice than on the first,
// on the third day 10 less than on the second, and so on ..
// A source is considered profitable only while its yield is at least 100 – when less than 100 spices are expected in a day, abandon the source. 
// The mining crew consumes 26 spices every day at the end of their shift and an additional 26 after the mine has been exhausted.
// Note that the workers cannot consume more spice than there is in storage. 

function spiceMustFlow(startingYield){
    let day = 0;
    let spicesExtracted = 0;
    while(startingYield >= 100){
        day++;
        spicesExtracted += startingYield - 26;
        startingYield -= 10;
    }
    day !== 0 ? spicesExtracted -= 26 : spicesExtracted;

    console.log(day);
    console.log(spicesExtracted);
}
