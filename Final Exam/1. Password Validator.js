// 1. Password Validator

function passwordValidator(input) {
  let password = input.shift();
  // console.log(password);
  let sum = 0;
  let replacement = "";

  while (input[0] != "Complete") {
    let tokens = input.shift().split(" ");
    let [command, p1, p2] = tokens;
    // console.log(command);

    if (command == "Make") {
      p2 = Number(p2);
      if (p1 == "Upper") {
        let char = password[p2].toLocaleUpperCase();
        let left = password.slice(0, p2);
        let right = password.slice(p2 + 1);
        password = left + char + right;
        console.log(password);
      } else if (p1 == "Lower") {
        let char = password[p2].toLocaleLowerCase();
        let left = password.slice(0, p2);
        let right = password.slice(p2 + 1);
        password = left + char + right;
        console.log(password);
      }
    } else if (command == "Insert") {
      p1 = Number(p1);
      if (p1 > 0 || p1 <= password.length) {
        let left = password.slice(0, p1);
        let right = password.slice(p1, password.length);
        password = left + p2 + right;
      }
      console.log(password);

    } else if (command == "Replace") {
      p2 = Number(p2);
      sum = p1.charCodeAt(p1) + p2;
      replacement = String.fromCharCode(sum);
      let newPass = password.split(p1).join(replacement);
      password = newPass;
      console.log(password); 

    } else if (command == "Validation") {
        if (password.length < 8) {
            console.log("Password must be at least 8 characters long!");
        }

        let asciiCode = password.charCodeAt(0);
        // console.log(asciiCode, " asciiCode ----");

        if ((!asciiCode >= 48 && asciiCode <= 57) || (!asciiCode >= 65 && asciiCode <= 90) || (!asciiCode >= 97 && asciiCode <= 122) || (asciiCode != 95) ) {
            console.log("Password must consist only of letters, digits and _!");
        }

        if (!asciiCode >= 65 && asciiCode <= 90) {
            console.log("Password must consist at least one uppercase letter!");
        }

        if (!asciiCode >= 97 && asciiCode <= 122) {
            console.log("Password must consist at least one lowercase letter!");
        }

        if (!asciiCode >= 48 && asciiCode <= 57){
            console.log("Password must consist at least one digit!");
        }
    }
  }
}

passwordValidator([
  "invalidpassword*",
  "Add 2 p",
  "Replace i -50",
  "Replace * 10",
  "Make Upper 2",
  "Validation",
  "Complete",
]);

console.log("-----");

passwordValidator([
  "123456789",
  "Insert 3 R",
  "Replace 5 15",
  "Validation",
  "Make Lower 3",
  "Complete",
]);
