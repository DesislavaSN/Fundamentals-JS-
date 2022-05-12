//2.	Substring

function substring(str, start, count){
    return str.substring(start, count + start);
}

console.log(substring('ASentence', 1, 8));//Sentence
console.log(substring('SkipWord', 4, 7) );// Word
console.log(substring('JavaScript is alsome!!!', 4, 12) );// Script is al
