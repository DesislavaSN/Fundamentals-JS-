// 4. String substring:
 
function strSubstring(specialWord, text){
    text = text.toLocaleLowerCase();
    let arrText = text.split(" ");
 
    for (let word of arrText) {
        if(arrText.includes(specialWord)){
            console.log(specialWord);
            break;
        } else {
            console.log(`${specialWord} not found!`);
            break;
        }
    }
}
 
strSubstring('javascript', 'JavaScript is the best programming language'); // javascript
strSubstring('python', 'JavaScript is the best programming language'); // python not found!
strSubstring('python', 'JavaScript and python are the best programming languages'); // python 


