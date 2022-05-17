// 2. Ad Astra

function adAstro(input){

    let totalKcal = 0;
    let kcalPerDay = 2000;

    let pattern = /([|#])(?<item>[A-Z][a-z]*\s?(?:[A-Z][a-z]*\s?)*)\1(?<expiration>\d\d\/\d\d\/\d\d)\1(?<kcal>\d+)\1/g;
    let match = pattern.exec(input);
    
    while(match != null){
        totalKcal += Number(match.groups.kcal);
        match = pattern.exec(input);
    }
    
    let days = totalKcal / kcalPerDay;
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);

    match = pattern.exec(input);
    while(match != null){
        console.log(`Item: ${match.groups.item}, Best before: ${match.groups.expiration}, Nutrition: ${match.groups.kcal}`);
        match = pattern.exec(input);
    }
    
}

adAstro([
'#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);
console.log("-------");
adAstro([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])
console.log(("------"));
adAstro(['Hello|#Invalid food#19/03/20#450|$5*(@' ])
//  /([|#])(?<item>[A-Z][a-z]*\s?(?:[A-Z][a-z]*\s?)*)\1(?<expiration>\d\d\/\d\d\/\d\d)\1(?<kcal>\d+)\1/g;