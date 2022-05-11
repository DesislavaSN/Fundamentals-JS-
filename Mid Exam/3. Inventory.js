//Problem 3. Inventory
 
function inventory(input) {
    let collection = input.shift().split(", ");
 
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" - ");
        let command = tokens[0];
        let oldItem = tokens[1];
        // console.log(command, " command");
        // console.log(oldItem, " oldItem");
 
        if (command == "Collect") {
            collect(oldItem);
        } else if (command == "Drop") {
            drop(oldItem);
        } else if (command == "Combine Items") {
            combine(oldItem);
        } else if (command == "Renew") {
            renew(oldItem);
        } else if (command == "Craft!") {
            console.log(collection.join(", "));
        }
    }
 
    function collect(item) {
        if (!collection.includes(item)) {
            collection.push(item);
            // console.log(collection, " collect command");
        }
    }
 
    function drop(item) {
        let onIndex = collection.indexOf(item);
        if (onIndex != -1) {
            collection.splice(onIndex, 1);
            // console.log(collection, " dromp command");
        }
    }
 
    function combine(item) {
        let splittedItems = item.split(":");
        let oldItem = splittedItems[0];
        let newItem = splittedItems[1];
        let onIndex = collection.indexOf(oldItem);
        if (onIndex != -1) {
            collection.splice((onIndex + 1), 0, newItem);
        }
    }
 
    function renew(item) {
        let onIndex = collection.indexOf(item);
        if (onIndex != -1) {
            let changedPlace = collection.splice(onIndex, 1);
            collection.push(changedPlace);
        }
    }
}
 
inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);  // Iron, Sword, Gold 
 
 
console.log(" ------ ");
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);  // Sword, Bow, Iron
 