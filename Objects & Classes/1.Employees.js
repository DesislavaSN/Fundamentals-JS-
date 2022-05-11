//1.	Employees
 
function employees(arr){
    // console.log(arr);
    for(let i = 0; i < arr.length; i++){
        let number = arr[i].length;
        // console.log(number);
        let person = {
            employeeName: arr[i],
            personalNum: number
        }
        console.log(` Name: ${person.employeeName} -- Personal Number: ${person.personalNum}`);
    }
}
 
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
);
 
console.log(" ---- ");
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
);