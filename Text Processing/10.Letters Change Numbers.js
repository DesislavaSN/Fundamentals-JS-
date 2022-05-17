//10. *Letters Change Numbers

function lettersChangeNums(str) {

  // used "filter() to remove the empty "" elements in the array and returns an array with sequences element!!! 
  str = str.split(" ").filter(el => el != "");
  // console.log(str);
  let res = 0;

  for (let element of str) {
    let letterBeforeNum = element.substring(0, 1);
    let letterAfterNum = element.substring(element.length-1);
    let num = Number(element.substring(1, element.length-1));
    // console.log(num);

    if (letterBeforeNum == letterBeforeNum.toUpperCase()) {
      num = num / findLetterPosition(letterBeforeNum);
      // console.log(num);

    } else if (letterBeforeNum == letterBeforeNum.toLowerCase()) {
      num = num * findLetterPosition(letterBeforeNum);
      // console.log(num);
    }

    if (letterAfterNum == letterAfterNum.toUpperCase()) {
      num = num - findLetterPosition(letterAfterNum);
      // console.log(num);

    } else if (letterAfterNum == letterAfterNum.toLowerCase()){
      num = num + findLetterPosition(letterAfterNum);
      // console.log(num);
    }
    res += num;
  }
  console.log(res.toFixed(2));

  // find letter's position in alphabet:
  function findLetterPosition(letter) {
    letter = letter.toLowerCase();
    let alphabet = " abcdefghijklmnopqrstyvwxyz";
  
    for (let i = 1; i < alphabet.length; i++) {
      // console.log(alphabet[i]);
      if (letter == alphabet[i]) {
        return i;
      }
    }
  }
  // console.log(findLetterPosition("s"));

}

lettersChangeNums("A12b s17G");
lettersChangeNums('P34562Z q2576f   H456z');
lettersChangeNums('a1A');
