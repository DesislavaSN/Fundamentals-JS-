//3.	House Party

// A function that keeps track of guests that are going to a house party.
// You will be given an array of strings. Each string will be one of the following:
// -	"{name} is going!"
// -	"{name} is not going!"
// If you receive the first type of input, you have to add the person if he/she is not in the list
// -	(If he/she is in the list print: "{name} is already in the list!").
// If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!"). 


function houseParty(guests) {
    let newGuestList = [];

    for (let i = 0; i < guests.length; i++) {
        let guestName = guests[i].split(" ");
        // console.log(guestName);

        if (guestName.length < 4) {
            if (!newGuestList.includes(guestName[0])) {
                newGuestList.push(guestName[0]);
                // console.log(guestName[0]);
                // console.log(newGuestList, " added new guest name");

            } else {
                console.log(`${guestName[0]} is already in the list!`);
            }
        } else {
            let indexOfGuest = newGuestList.indexOf(guestName[0]);
            // console.log(indexOfGuest);
            if (indexOfGuest !== -1) {
               newGuestList.splice(indexOfGuest, 1) ;
            } else {
                console.log(`${guestName[0]} is not in the list!`);
            }
        }
    }
    console.log(newGuestList.join(" \n"));
}

houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);

// John is not in the list!
// Allie

console.log(" ----------------- ");
houseParty([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);

// Tom is already in the list!
// Tom
// Annie
// Garry
// Jerry

