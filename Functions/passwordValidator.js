// A function that checks if a given password is valid. Password validations are:
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits 


function passwordValidator(password) {
    if (lengthPass(password) == true && letters(password) == true && (digits(password) == true)) {
        console.log("Password is valid");
    }
    if (lengthPass(password) == false) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (letters(password) == false) {
        console.log("Password must consist only of letters and digits");
    }
    if (digits(password) == false) {
        console.log("Password must have at least 2 digits");
    }
} 
 
function lengthPass(password) {
    return password.length >= 6 && password.length <= 10;
}
 
function digits(password) {
    let digitsCounter = 0;
    let charCodeDigits;
    for (let i = 0; i < password.length; i++) {
        charCodeDigits = password.charCodeAt(i);
        // console.log(charCodeDigits);
        if (charCodeDigits >= 48 && charCodeDigits <= 57) {
            digitsCounter++;
        }
    }
    return digitsCounter >= 2 ? true : false;
}
 
function letters(password) {
    let isValid = false;
    let charCodeLetters;
    for (let i = 0; i < password.length; i++) {
        // console.log(password[i]);
        charCodeLetters = password.charCodeAt(i);
        // console.log(charCodeLetters);
        if ((charCodeLetters >= 48 && charCodeLetters <= 57) ||
            (charCodeLetters >= 65 && charCodeLetters <= 90) ||
            (charCodeLetters >= 97 && charCodeLetters <= 122)) {
            isValid = true;
        } else {
            isValid = false;
            break;
        }
    }
    if (isValid) {
        return true;
    } else {
        return false;
    }
}

passwordValidator("logIn");
passwordValidator("MyPass123");
passwordValidator("Pa$s$s");
