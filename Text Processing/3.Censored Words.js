//3.	Censored Words

function censoredWords(text, word){
    let res = text.split(word).join("*".repeat(word.length));
    console.log(res);
}

censoredWords('A small sentence with some words are small', 'small');
censoredWords('Find the hidden word in this hidden sentence', 'hidden')
