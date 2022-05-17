//9.	*Password Generator

function passGenerator(input) {
  password = (input[0] + input[1]).split("");
  // console.log(password);
  let replacement = input.pop().toLocaleUpperCase().split("");
  //   console.log(replacement);
  let newPass = "";
  let index = 0;

  for (let i = 0; i < password.length; i++) {
    let isVowel = "aeiou".includes(password[i]);
    // console.log(isVowel);
    // console.log(password[i].replace(password[i], replacment[i]));

    if (isVowel == true) {
      // console.log(index, replacement[index], " replacement index 1st");
      newPass += password[i].replace(password[i], replacement[index]);
      index = password.indexOf(password[index], index) + 1;
      // console.log(index, replacement[index], " replacement index 2nd");

      if (index >= replacement.length) {
        index = 0;
      }
    } else {
      newPass += password[i];
    }
  }
  newPass = newPass.split("").reverse().join("");
  console.log(`Your generated password is ${newPass}`);
}

passGenerator(["ilovepizza", "ihatevegetables", "orange"]);
passGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
