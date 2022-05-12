//5.Replace repeating char :
 
function replaceRepeatingChar(str){
    let newString = "";

    for(let i = 0; i < str.length; i++){
        if (str[i] != str[i+1]){
         newString += str[i];
        }
    }
    console.log(newString);
}
 
replaceRepeatingChar('aaaaabbbbbcdddeeeedssaa'); // abcdedsa
replaceRepeatingChar('qqqwerqwecccwd'); // qwerqwecwd