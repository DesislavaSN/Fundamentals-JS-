//1.	Words Tracker

function wordsTracker(arr) {
  let myWords = {};
  let tokens = arr.shift().split(" ");

  for (let word of tokens) {
      myWords[word] = 0;
  }

  for (let line of arr) {
    // console.log(line);
    if (myWords.hasOwnProperty(line)) {
        myWords[line] ++;
    }
  }
    // console.log(myWords);

  let sorted = Object.entries(myWords).sort((a, b) => b[1] - a[1]);
  //   console.log(sorted);
  for (let word of sorted) {
    console.log(`${word[0]} - ${word[1]}`);
  }
}

wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

console.log("-----");
wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);

//// ----- Map() -------:

// function wordsTracker(arr){

//     let myWords = new Map();
//     let tokens = arr.shift().split(" ");
//     let word1 = tokens[0];
//     let word2 = tokens[1];
//     myWords.set(word1, 1);
//     myWords.set(word2, 1);
//     let w1Count = 0;
//     let w2Count = 0;

//     for (let line of arr) {
//         if (myWords.has(line) ) {
//             if (line == word1) {
//                 w1Count++;
//                 myWords.set(word1, w1Count);
//             }
//             if (line == word2) {
//                 w2Count++;
//                 myWords.set(word2, w2Count);
//             }
//         }
//     }

//     sorted = Array.from(myWords).sort((a,b) => b[1] - a[1]);
//     // console.log(sorted);
//     for (let word of sorted) {
//         console.log(`${word[0]} - ${word[1]}`);
//     }
// }
