// 8 Hard Words
 
function hardWords(input) {
 
    let str = input.shift().split(" ");
    // console.log(str);
    let words = input.shift();
    
    for (let i = 0; i < str.length; i++) {
        let currWord= str[i];
        
        for (let word of words) {
            if (currWord.includes('_')) {
                console.log(currWord);
            } 
        }
    }         
}
 
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);