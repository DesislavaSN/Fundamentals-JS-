// 1. World Tour

function worldTour(input) {
  let myStops = input.shift();
  //   console.log(myStops);

  while (input[0] != "Travel") {
    let tokens = input.shift().split(":");
    let [command, p1, p2] = tokens;
    // console.log(command, p1, p2);

    if (command == "Add Stop") {
      pi = Number(p1);
      if (p1 <= myStops.length) {
        let left = myStops.substring(0, p1);
        let rigth = myStops.substring(p1);
        myStops = left + p2 + rigth;
      }
      console.log(myStops);
    } else if (command == "Remove Stop") {
      p1 = Number(p1);
      p2 = Number(p2);
      if (p1 < myStops.length && p2 < myStops.length) {
        let left = myStops.substring(0, p1);
        let right = myStops.substring(p2 + 1);
        // console.log(left, " -> ", right);
        myStops = left + right;
      }
      console.log(myStops);
    } else if (command == "Switch") {
      if (myStops.includes(p1) == true) {
        myStops = myStops.split(p1).join(p2);
      }
      console.log(myStops);
    }
  }
  console.log(`Ready for world tour! Planned stops: ${myStops}`);
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
console.log("---");

worldTour([
  "Albania:Bulgaria:Cyprus:Deuchland",
  "Add Stop:3:Nigeria",
  "Remove Stop:4:8",
  "Switch:Albania: Azərbaycan",
  "Travel",
]);
