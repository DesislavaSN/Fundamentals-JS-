//1.	Reveal Words

function revealWords(words, str){
    words = words.split(", ") ;
    // console.log(words);

    for (let word of words) {
        str = str.replace('*'.repeat(word.length), word);
    }
    console.log(str);
}

revealWords('great',
'softuni is ***** place for learning new programming languages'
);
revealWords('great, learning',
'Softuni is ***** place for ******** new programming languages!'
)