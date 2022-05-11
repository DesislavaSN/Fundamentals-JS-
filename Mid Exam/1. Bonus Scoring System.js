//Problem 1 - Bonus Scoring System

// formula -> totalBonus
//{total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
 
function bonusScoringsystem(input) {
    let studentsCount = Number(input[0]);
    let lectures = Number(input[1]);
    let bonus = Number(input[2]);
    let studentAttendances = input.slice(3).map(Number);
    let bonusesArr = [];
 
    for (let i = 0; i < studentAttendances.length; i++) {
        let totalBonus = Math.ceil((studentAttendances[i] / lectures) * (5 + bonus));
        bonusesArr.push(totalBonus);
    }
 
    bonusesArr = bonusesArr.sort((a,b)=> b-a);
    studentAttendances = studentAttendances.sort((a,b)=> b-a);
    // console.log(bonusesArr);
    // console.log(studentAttendances);
 
    let maxBonus = bonusesArr.slice(0,1);
    let maxAtendeces = studentAttendances.slice(0,1);
    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${maxAtendeces} lectures.`);
 
}
 
bonusScoringsystem(['0', '25', '30',
    '12', '19', '24', '16', '20', '29'
]);
 
bonusScoringsystem(['5', '25', '30',
    '12', '19', '24', '16', '20'
]);
 
console.log(" ------- ");
bonusScoringsystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);
 
 
// metodi da izvadq nai-golqmo chislo ot array s Math.max
// let maxBonus = Math.max(...bonusesArr);
// let maxAtendeces = Math.max(...studentAttendances);
 
//----
// test na function-a v glavnia function:
// function largest(arr){
//     let maxNum = arr[0];
 
//     for(let i =0; i < arr.length; i++){
//         if (maxNum < arr[i]) {
//             maxNum = arr[i];
//         }
//     }
//     console.log(maxNum);
// }
 
// largest([12, 19, 24, 16, 20])
 
//// -----
 
 
// let maxBonus = largest(bonusesArr);
// let maxAtendeces = largest(studentAttendances)
 
// function largest(arr){
//     let maxNum = arr[0];
//     for(let i =0; i < arr.length; i++){
//         if (maxNum < arr[i]) {
//             maxNum = arr[i];
//         }
//     }
//     return maxNum;
// }