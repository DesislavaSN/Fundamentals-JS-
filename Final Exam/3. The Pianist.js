//3 - The Pianist

function thePianist(input) {
  let numPieces = Number(input.shift());
  let pieces = {};

  while (numPieces > 0) {
    numPieces--;
    let tokens = input.shift().split("|");
    // console.log(tokens);
    let pieceName = tokens[0];
    let composer = tokens[1];
    let pianoKey = tokens[2];

    pieces[pieceName] = {
      composer,
      pianoKey,
    };
  }

  while (input[0] != "Stop") {
    let tokens = input.shift().split("|");
    // console.log(tokens);
    let command = tokens[0];
    let name = tokens[1];
    let p1 = tokens[2];
    let p2 = tokens[3];

    if (command == "Add") {
      if (pieces[name] != undefined) {
        console.log(`${name} is already in the collection!`);
      } else {
        pieces[name] = {
          composer: p1,
          pianoKey: p2,
        };
        console.log(`${name} by ${p1} in ${p2} added to the collection!`);
      }
    } else if (command == "Remove") {
      if (pieces[name] != undefined) {
        delete pieces[name];
        console.log(`Successfully removed ${name}!`);
      } else {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      }
    } else if (command == "ChangeKey") {
      if (pieces[name] != undefined) {
        pieces[name].pianoKey = p1;
        console.log(`Changed the key of ${name} to ${p1}!`);
      } else {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      }
    }
  }

  //   console.log(pieces);
  for (let [name, value] of Object.entries(pieces)) {
    console.log(
      `${name} -> Composer: ${value.composer}, Key: ${value.pianoKey}`
    );
  }
}

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);

console.log("-----");

thePianist([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
