//1.	Furniture

function furnitures(input) {
  let pattern =
    /\>>(?<furName>[A-Z][A-Za-z]+)\<<(?<price>\d+\.?\d+)!(?<qnt>\d+)/gm;
  let match = pattern.exec(input);

  let totalSpend = 0;
  console.log("Bought furniture: ");
  while (match != null) {
    console.log(match.groups.furName);
    totalSpend += Number(match.groups.price * match.groups.qnt);
    match = pattern.exec(input);
  }
  console.log(`Total money spend: ${totalSpend.toFixed(2)}`);
}

furnitures([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
console.log("-------");

furnitures([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
console.log("----------");

furnitures([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);
