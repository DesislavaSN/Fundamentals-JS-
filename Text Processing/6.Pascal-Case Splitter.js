// 6. Pascal-Case Splitter:
 
function pascalCaseSplitter(str){
 
    let words = [];
    let firstWord = str[0];
 
    for(let i = 1; i < str.length; i++){
        let currLetter = str[i];
        // console.log(currLetter);
        if (currLetter.toUpperCase() !== currLetter) {
            firstWord += currLetter;
            // console.log(firstWord);
        } else {
            words.push(firstWord);
            firstWord = currLetter;
        } 
    }
    words.push(firstWord);
    console.log(words.join(", "));
}
 
 
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan'); 
//Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can
pascalCaseSplitter('HoldTheDoor'); //Hold, The, Door
// console.log("-------------");
pascalCaseSplitter('ThisIsAnnoyingToDo'); // This, Is, Annoying, To, Do
 
 
