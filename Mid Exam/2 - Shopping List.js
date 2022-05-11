//Problem 2 - Shopping List

function shoppingList(input) {
    let shoppingList = input.shift().split("!");
    // console.log(shoppingList);
    // console.log(input);

    for (let i = 0; i < input.length; i++) {
        let [command, item, newItem] = input[i].split(" ");
        // console.log(command);
        // console.log(item);
        // console.log(newItem, " new item");

        let onIndex = shoppingList.indexOf(item);
        if (command == "Urgent") {
            if (shoppingList.includes(item) == false) {
                shoppingList.unshift(item);
            }
            // console.log(shoppingList, " urgent command");
        } else if (command == "Unnecessary") {
            if (onIndex != -1) {
                shoppingList.splice(onIndex, 1);
            }
            // console.log(shoppingList, "unnecessary");
        } else if(command == "Correct"){
            // console.log(onIndex);
            if(onIndex != -1){
                shoppingList.splice(onIndex, 1, newItem);
            }
            // console.log(shoppingList, " correct command");
        } else if (command == "Rearrange"){
            if (onIndex != -1) {
                shoppingList.splice(onIndex, 1);
                shoppingList.push(item);
            }
            // console.log(shoppingList, " reranged");
        } else {
            console.log(shoppingList.join(", "));
        }
    }
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]);

console.log(" ------ ");

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]) // Milk, Onion, Salt, Water, Banana
