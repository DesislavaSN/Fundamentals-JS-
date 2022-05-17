//3.	SoftUni Bar Income

function softUniBar(input){

    let patter = /%(?<name>[A-Z][a-z]+)%.*?<(?<item>\w+)>.*?\|(?<qty>\d+)\|.*?(?<price>\d+(?:\.\d+)?)\$/;
    let income = 0;

    while(input[0] != "end of shift"){
        let line = input.shift();

        let match = patter.exec(line);
        if (match != null) {
            let totalPrice = Number(match.groups.qty * match.groups.price);
            income += totalPrice;
            console.log(`${match.groups.name}: ${match.groups.item} - ${totalPrice.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}
 
softUniBar(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
);
 
console.log("-------------");
 
softUniBar(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
);


// // -------------------------------- 
// 2ro reshenie: dade mi 70/100 points!

// function softUniBar(input){
//     let income = [];
//     // let pattern = /%(?<name>[A-Z][a-z]+)%<(?<product>\w+)>[^|$%.]*?\|(?<qnt>\d+?)\|[^|$%.]*?(?<price>\d+.?\d+)\$/g;
//     let pattern = /%(?<name>[A-Z][a-z]+)%<(?<product>\w+)>.*?\|(?<qnt>\d+?)\|.*?(?<price>\d+.?\d+)\$/g;

 
//     for (let line of input) {
//         if (line != "end of shift") {
//             let matches = pattern.exec(line);
//             while(matches != null){
//                 let totalPrice = Number(matches.groups.qnt * matches.groups.price);
//                 income.push(totalPrice);
//                 console.log(`${matches.groups.name}: ${matches.groups.product} - ${totalPrice.toFixed(2)}`);
//                 matches = pattern.exec(line);
//             }  
//         }
//     }
//     // console.log(income);
//     let sum = 0;
//     for (let prod of income) {
//         sum += prod;
//     }
//     console.log(`Total income: ${sum.toFixed(2)}`);
// }