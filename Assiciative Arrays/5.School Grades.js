//5.	School Grades

function schoolGrades(arr) {
  let res = new Map();

  for (let line of arr) {
    let tokens = line.split(" ");
    let name = tokens.shift();
    let grades = tokens.map(Number);

    if (!res.has(name)) {
      res.set(name, []);
    }

    let exist = res.get(name);
    for (let grade of grades) {
      exist.push(grade);
    }
  }

  let sorted = Array.from(res.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  for (let [name, grades] of sorted) {
    let averageGr = 0;
    for (let grade of grades) {
      averageGr += grade / grades.length;
    }
    console.log(`${name}: ${averageGr.toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
