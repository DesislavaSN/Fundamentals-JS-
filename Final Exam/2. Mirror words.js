//2 - Mirror words

function mirrorWordsProblem(input) {
  let pattern = /([@#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[a-zA-z]{3,})\1/g;
  let mirror = [];
  let count = 0;
  let match = pattern.exec(input);

  while (match != null) {
    let originWord = match.groups.word1;
    // console.log(match.groups.word2, " word 2");
    let mirrorWord = match.groups.word2.split("").reverse().join("");

    count++;
    if (mirrorWord == originWord) {
      mirror.push(`${originWord} <=> ${match.groups.word2}`);
    }

    match = pattern.exec(input);
  }

  if (count > 0) {
    console.log(`${count} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }

  if (mirror.length > 0) {
    console.log("The mirror words are:");
    console.log(mirror.join(", "));
  } else {
    console.log("No mirror words!");
  }
}

mirrorWordsProblem([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);

console.log("-----");

mirrorWordsProblem([
  "#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@",
]);

console.log("-----");

mirrorWordsProblem(["#lol###lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);

// --------------------

// if (foundMirrorPairs == false && count > 0) {
//     console.log(`${count} word pairs found!\nNo mirror words!`);
// } else if (foundMirrorPairs == true){
//     console.log(`${count} word pairs found!\nThe mirror words are:\n${mirror.join(", ")}`);
// } else {
//     console.log("No word pairs found!\nNo mirror words!");
// }
