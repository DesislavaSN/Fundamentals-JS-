//Problem 3 - Moving Target
 
function movingTarget(input){
    let targets = input.shift().split(" ").map(Number);
 
    for(let i = 0; i < input.length; i++){
        let tokens = input[i].split(" ");
        let command = tokens[0];
        if (command == "End") {
            console.log(targets.join("|"));
            break;
        }
        let indexEl = Number(tokens[1]);
        let valueEl = Number(tokens[2]);
 
        // console.log(targets[indexEl], " current target ");
 
        if (command == "Shoot") {
            if (targets[indexEl] != undefined) {
                targets[indexEl] -= valueEl;
                if (targets[indexEl] <= 0) {
                    targets.splice(indexEl, 1);
                }
                // console.log(targets);
            }
        } else if (command == "Add"){
            if (targets[indexEl] != undefined) {
                targets.splice(indexEl, 0, targets[indexEl])
            } else {
                console.log("Invalid placement!");
            }
            // console.log(targets);
        } else if (command == "Strike"){
            if (indexEl - valueEl < 0) {
                console.log("Strike missed!");
                console.log(targets.join("|"));
                break; 
            }
            targets.splice(indexEl+valueEl, 1);
            targets.splice(indexEl, 1);
            targets.splice(indexEl - valueEl, 1);
        } 
    }
}
 
movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]);  

// Invalid placement! 
// 52|100
 
// console.log(" ---------- ");
 
// movingTarget(["1 2 3 4 5",
// "Strike 0 1",
// "End"]);
 
// movingTarget(["52 74 23 44 96 110 222 987 567",
// "Shoot 5 10",
// "Shoot 1 80",
// "Strike 6 1",
// "Add 22 3",
// "Shoot 5 10",
// "Strike 2 1",
// "End"]); 