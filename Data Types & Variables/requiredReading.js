// A function to calculate how many hours a day, a person has to spend reading the necessary literature from the list given for the summer vacation.
// Print on the console the number of hours, he/ she has to read each day.

function readingRequired(numPages, pagesFor1Hour, daysForReading ){
    let totalReadingTime = numPages / pagesFor1Hour;
    let hoursPerDay = totalReadingTime / daysForReading;
    console.log(hoursPerDay);
}
