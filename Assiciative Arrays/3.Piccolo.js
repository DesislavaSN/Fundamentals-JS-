//3.	Piccolo

function piccolo(arr) {
  let parkingLot = {};

  for (let line of arr) {
    let [direction, carNum] = line.split(", ");
    if (direction == "IN") {
      parkingLot[carNum] = 1;
    } else {
      delete parkingLot[carNum];
    }
  }
  let size = Object.entries(parkingLot).length;
//   console.log(size);
  if (size === 0) {
      console.log("Parking Lot is Empty");
    } else {
        let sorted = Object.keys(parkingLot).sort();
        console.log(sorted.join("\n"));
    // console.log(parkingLot);
  }
}


piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
// CA2822UU
// CA2844AA
// CA9876HH
// CA9999TT

console.log("-----");

piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);

