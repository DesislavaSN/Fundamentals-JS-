//1. Activation Keys

function activationKeys(input) {
    let activationKey = input.shift();

    while(input[0] != "Generate"){
        let [command, p1, p2, p3] = input.shift().split(">>>");

        if (command == "Contains") {
            // console.log(p1);
            if(activationKey.includes(p1)){
                console.log(`${activationKey} contains ${p1}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (command == "Flip") {
            let left = activationKey.slice(0, p2);
            let right = activationKey.slice(p3);
            if (p1 == "Upper") {
                let flippedUpper = activationKey.slice(p2, p3).toUpperCase();
                activationKey = left + flippedUpper + right;
                console.log(activationKey);
            } else {
                let flippedLower = activationKey.slice(p2, p3).toLowerCase();
                activationKey = left + flippedLower + right;
                console.log(activationKey);
            }
        } else if (command == "Slice") {
            p1 = Number(p1);
            p2 = Number(p2);
            let left = activationKey.slice(0, p1);
            let right = activationKey.slice(p2);
            // console.log(left, "->", right);
            activationKey = left + right;
            console.log(activationKey);
        }   
    }
    console.log(`Your activation key is: ${activationKey}`);
}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
console.log("-----");
activationKeys([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);


//-----

// if (p1 == "Upper") {
//     let left = activationKey.slice(0, p2);
//     let right = activationKey.slice(p3);
//     let flipped = activationKey.slice(p2, p3).toUpperCase();
//     activationKey = left + flipped + right;
//     console.log(activationKey);
// } else {
//     let left = activationKey.slice(0, p2);
//     let right = activationKey.slice(p3);
//     let flipped = activationKey.slice(p2, p3).toLowerCase();
//     activationKey = left + flipped + right;
//     console.log(activationKey);
// }