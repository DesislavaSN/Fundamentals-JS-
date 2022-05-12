// //2.	Meetings and Map() version
 
function meetingPr(arr){
    let list = {};
    let res = "";
    for(let line of arr){
        let [day, name] = line.split(" ");
        // console.log(list.hasOwnProperty(day));
 
        if (list.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            list[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let day in list) {
        res += `${day} -> ${list[day]} \n`;
    }
    return res;
}
 
console.log(meetingPr(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
));
 
 
// // ------ Map() ------ 
 
// function meetingMap(arr){
//     let meeting = new Map();
//     let res = "";
 
//     for (let line of arr) {
//         let [day, name] = line.split(" ");
//         // console.log(meeting.has(day));
//         if (meeting.has(day)) {
//             console.log(`Conflict on ${day}!`);
//         } else {
//             meeting.set(day, name);
//             console.log(`Scheduled for ${day}`);
//         }
//     }
 
//     for (let [day, name] of meeting) {
//         res += `${day} -> ${name} \n`
//     }
//     return res;
// }
 
// meetingMap(['Monday Peter',
// 'Wednesday Bill',
// 'Monday Tim',
// 'Friday Tim']
// );
 
// console.log(meetingMap(['Monday Peter',
// 'Wednesday Bill',
// 'Monday Tim',
// 'Friday Tim']
// ));