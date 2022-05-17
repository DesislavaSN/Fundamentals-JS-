// 2.	Race

function race(input) {
    let racers = {};
    let listRacers = input.shift().split(", ");
   
    for (let line of input) {
      if (line !== "end of race") {
        let racerName = line.match(/[A-Za-z]+/g).join("");
        // console.log(racerName);
        let racerKm = line.match(/\d/g);
   
        // if racer's name is included to the list & to the 'racers' object:
        if (listRacers.includes(racerName)) {
          if (racers.hasOwnProperty(racerName)) {
            racers[racerName] += kmsPerRacer(racerKm);
          } else {
            racers[racerName] = kmsPerRacer(racerKm);
          }
        }
      }
    }
   
    //sort the racers:
    let sortedRacersArr = Object.keys(racers).sort(
      (a, b) => racers[b] - racers[a]
    );
   
    console.log(`1st place: ${sortedRacersArr[0]}`);
    console.log(`2nd place: ${sortedRacersArr[1]}`);
    console.log(`3rd place: ${sortedRacersArr[2]}`);
   
    // calculate kms for each racer:
    function kmsPerRacer(arr) {
      let res = 0;
      for (let i = 0; i < arr.length; i++) {
          res += Number(arr[i]);
      }
      return res;
    }
}
   
race([
    "George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@ ",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race",
]);
   
console.log("-------------");
race([
    "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
    "Mi*&^%$ch123o!#$%#nne787) ",
    "%$$B(*&&)i89ll)*&) ",
    "R**(on%^&ald992) ",
    "T(*^^%immy77) ",
    "Ma10**$#g0g0g0i0e",
    "end of race",
]);
   
   
  