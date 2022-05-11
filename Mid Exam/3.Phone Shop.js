//3.  phone Shop

function phoneShop(input){
    let phones = input.shift().split(", ");
    // console.log(phones); // ['SamsungA50', 'MotorolaG5', 'IphoneSE']

    for(let i = 0; i < input.length; i++){
        let tokens = input[i].split(" - ");
        // console.log(tokens);
        let command = tokens[0];
        let oldPhone = tokens[1];
        let onIndex = phones.indexOf(oldPhone);
        // console.log(oldPhone);

        if (command == "Add") {
            if(!phones.includes(oldPhone)){
                phones.push(oldPhone);
                // console.log(phones, " Add command");
            }
        } else if ( command == "Remove"){
            if(phones.includes(oldPhone)){
                phones.splice(onIndex,1);
                // console.log(phones, " Remove command");
            }
        } else if ( command == "Bonus phone"){
            let splited = tokens[1].split(":");
            let oldPh = splited[0];
            let newPh = splited[1];
            let onIndexOldPh = phones.indexOf(oldPh);
            // console.log(onIndexOldPh);
            if (phones.includes(oldPh)) {
                phones.splice(onIndexOldPh+1, 0, newPh);
            }
            // console.log(phones, " Bonus phone");

        } else if (command == "Last"){
            if (phones.includes(oldPhone)) {
                // console.log(onIndex);
                let putLast = phones.splice(onIndex,1).join();
                // console.log(typeof putLast);
                phones.push(putLast);
                // console.log(phones, " Last command");
            }
        } else {
            console.log(phones.join(", "));
        }
    }
}

phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"])	
// SamsungA50, MotorolaG5, Iphone10

console.log(" ----- ");
phoneShop(["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"])	
// HuaweiP20, XiaomiNote, Iphone5

console.log(" ----- ");

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"])	
// MotorolaG5, HuaweiP10, SamsungA50
