function rightPlace(string, char, match){
    let result = "";

    for(let i = 0; i < string.length; i++){
        //console.log(string[i]);
        if (string[i] === "_") {
            result += char;
            //console.log(result);
        } else {
            result += string[i]
            //console.log(result);
        }
    }
    //console.log(result);
    if (result === match) {
        console.log(`Matched`);
    } else {
        console.log(`Not Matched`);
    }
}
