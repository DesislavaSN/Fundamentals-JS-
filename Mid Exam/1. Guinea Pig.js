// // Problem 1 - Guinea Pig

function guineaPig(input){
    let [ food, hay, cover, guinea] = input.map(el => Number(el) * 1000);
    let hayPerDay = 0;
    let coverPerDay = 0;

    for(let i = 1; i <= 30 ; i++){
        
        food -= 300;
        if(i % 2 ==0){
            hayPerDay = food * 0.05;
            hay -= hayPerDay;
        } 
        if ( i % 3 === 0){
            coverPerDay = guinea * 1/3;
            cover -= coverPerDay;
        }
    }

    let foodKg = food / 1000;
    let hayKg = hay / 1000;
    let coverKg = cover / 1000;
    if (food >= (300 /1000) && hay >= hayPerDay && cover >= coverPerDay) {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`);
    } else {
        console.log("Merry must go to the pet store!");
    }

    // console.log(food.toFixed(2));
    // console.log(hay.toFixed(2));
    // console.log(cover.toFixed(2));

}

guineaPig(["10", 
"5", 
"5.2", 
"1"]);


guineaPig(["1", 
"1.5", 
"3", 
"1.5"
])


guineaPig(["9",
"5",
"5.2",
"1"])

 
