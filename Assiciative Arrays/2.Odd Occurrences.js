//2.	Odd Occurrences

function oddOccurrences(input){
    let myObj = {};
    let elements = input.split(" ");

    for (let el of elements) {
        el = el.toLowerCase();
        if (myObj.hasOwnProperty(el)) {
            myObj[el]++;
        } else {
            myObj[el] = 1;
        }
    }
    let objArr = Object.entries(myObj);
    // console.log(objArr);
    let res = [];
    for (let [k,v] of objArr) {
        if (v % 2 !== 0) {
            res.push(k);
        }
    }
    console.log(res.join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');