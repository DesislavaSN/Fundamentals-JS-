//4.	Convert to JSON
 
function JsonToObj(firstName, lastName, hairColor ){
 
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }
    // console.log(person);
 
    let text = JSON.stringify(person);
    console.log(text);
}
 
JsonToObj('George', 'Jones', 'Brown');
JsonToObj('Peter', 'Smith', 'Blond');