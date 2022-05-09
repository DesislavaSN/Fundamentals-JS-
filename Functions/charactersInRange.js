// A function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. 

function charactersInRange(char1, char2) {
    char1 = char1.charCodeAt(0);
    char2 = char2.charCodeAt(0);
    // console.log(char1 + " char 1");
    // console.log(char2 + " char 2");
 
    let res = [];
    if (char1 < char2) {
        for (let i = char1 + 1; i < char2; i++) {
            // console.log(i);
            res.push(String.fromCharCode(i));
        }
        console.log(res.join(" "));
    } else {
        for (let k = char2 + 1; k < char1; k++) {
            // console.log(k);
            res.push(String.fromCharCode(k));
        }
        console.log(res.join(" "));
    }
}
