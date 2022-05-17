// 2. Fancy Barcodes

function fancyBarcodes(input) {
  let numBarcodes = Number(input.shift());
  let pattern = /(@#{1,})(?<item>[A-Z][A-Za-z0-9]{4,}[A-Z])\1/g;
  // digitsPattern ->  /\d+/g;

  for (let i = 0; i < numBarcodes; i++) {
    let match = pattern.exec(input[i]);
    let groupProduct = "";

    if (match == null) {
      console.log("Invalid barcode");
    } else {
      let validItem = match.groups.item;
      match = pattern.exec(input[i]);
      let group = validItem.match(/\d/g);
      // console.log(group);

      if (group == null) {
        console.log(`Product group: 00`);
      } else if (group.length == 1) {
        console.log(`Product group: ${group}`);
      } else {
        for (let i = 0; i < group.length; i++) {
          groupProduct += group[i];
        }
        console.log(`Product group: ${groupProduct}`);
      }
    }
  }
}

fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);

console.log("----");

fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
