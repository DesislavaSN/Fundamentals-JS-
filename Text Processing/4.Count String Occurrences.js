//4.	Count String Occurrences

/* A function that receives a text and a single word that you need to search. 
Print the number of all occurrences of this word in the text.  */

function countinStr(str, word){
let splitText = str.split(" ");
let count = 0;
for (let char of splitText) {
    // console.log(char);
    if(char == word){
        count++;
    }
}
console.log(count);
}

countinStr("This is a word and it also is a sentence", "is");
console.log(" ----");
countinStr("softuni is great place for learning new programming languages","softuni");
