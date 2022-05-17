//1. Password Reset

function passwordReset(input) {
    let text = input.shift();
    // console.log(text);

    while(input[0] != "Done"){
        let line = input.shift();
        let [command, p1, p2] = line.split(" ");
        
        if (command == "TakeOdd") {
            let newPass = "";
            for(let i = 1; i < text.length; i+=2){
                newPass += text[i];
            }
            text = newPass;
            console.log(text);
        } else if (command == "Cut") {
            p1 = Number(p1);
            p2 = Number(p2);
            let left = text.substring(0, p1);
            let right = text.substring(p1+p2);
            // console.log(right);
            text = left + right;
            console.log(text);
        } else if (command == "Substitute") {
            if (text.includes(p1) == true) {
                text = text.split(p1).join(p2);
                console.log(text);
            } else {
                console.log("Nothing to replace!");
            }
        }
    }
    console.log(`Your password is: ${text}`);
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);

console.log("---");

passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
