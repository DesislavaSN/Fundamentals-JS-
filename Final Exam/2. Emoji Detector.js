//2. Emoji Detector

function emojiDetector(input){

    let emojiPattern = /(?<myMatch>(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\2)/g;
    let digitsPattern = /\d/g;
    let allDigits = [];
    let allEmojis = [];

    let matchDig = digitsPattern.exec(input);
    while(matchDig != null){
        allDigits.push(Number(matchDig[0]));
        matchDig = digitsPattern.exec(input);
    }

    let threshold = 1;
    for(let i = 0; i < allDigits.length; i++){
        threshold *= allDigits[i];
    }

    console.log(`Cool threshold: ${threshold}`  );
    
    let matchEmoji = emojiPattern.exec(input);
    while(matchEmoji != null){
        allEmojis.push(matchEmoji.groups.myMatch);
        matchEmoji = emojiPattern.exec(input);
    }
    // console.log(allEmojis);
    console.log(`${allEmojis.length} emojis found in the text. The cool ones are:`);

    for(let i = 0; i < allEmojis.length; i++){
        let currEmoji = allEmojis[i].split("");
        let coolness = 0;
        
        for (let char of currEmoji) {
            // console.log(char);
            let asciiCode = char.charCodeAt(0);
            if ((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)) {
                coolness += asciiCode;
            }
        }
        // console.log(coolness , " coolness");

        if (coolness >= threshold) {
            console.log(currEmoji.join(""));            
        }
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

console.log("---");

emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);

console.log("---");

emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])

