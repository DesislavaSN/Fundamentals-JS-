//2.	Modern Times of #(HashTag)

function modernTime(str) {
  let words = str.split(" ");
  //   console.log(words);

  for (let word of words) {
    if (word.startsWith("#") == true && word.length > 1) {
      // console.log(word);
      let asciCode = word.charCodeAt(1);
      let isLetters = (asciCode >= 65 && asciCode <= 90) || (asciCode >= 97 && asciCode <= 122);
      if(isLetters){
        console.log(word.substring(1));
      }
    }
  }
}

modernTime('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTime('The symbol # is known #variously in English-speaking #regions as the #number sign')
// modernTime(
//   "The symbol # is known #variously$ in English-speaking #regions as the #number sign"
// );


