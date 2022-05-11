//Problem 2 - The Lift

function theLift(input){
    let people = Number(input[0]);
    let liftState = input[1].split(" ").map(Number);
    // console.log(people, " people");
    // console.log(liftState, " liftState");
    let maxPeople = 4;
    let peopleInLift = 0;

   for(let i = 0; i< liftState.length; i++){
    //    console.log(liftState[i]);

       if(liftState[i] >= maxPeople){
           continue;
       } else {
           if (liftState[i] == 0) {
               peopleInLift += maxPeople;
               people -= peopleInLift;
            }
            peopleInLift = people - liftState[i];
            console.log(peopleInLift, 'people after calcolation');
            
       }
   }

}



theLift(["15","0 0 0 0"]);

// console.log(" ----- ");

// theLift(["20","0 2 0"]);




// function theLift(input) {

//     let people = Number(input[0]);
//     let liftState = input[1].split(" ").map(Number);
//     // let newLiftState = [];
//     // console.log(liftState);
//     let maxPeople = 4;
//     let peopleOnQueue = 0;

//     for(let i = 0; i < liftState.length; i++){
//         console.log(liftState);
//         if (liftState[i] >= maxPeople) {
//             continue;
//         } else {
//             if (liftState[i] == 0) {
//                 people -= maxPeople;
//             }
//             people -= liftState[i];
//         }
        
//         console.log(people);
//     }

// }