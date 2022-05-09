// A function that receives two points in the format [x1, y1, x2, y2] and checks if the distances between each point (x, y) and 
// the start of the Cartesian coordinate system (0, 0) and between the points themselves is valid. 
// A distance between two points is considered valid if it is an integer value.
// The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
// The distance formula for the distance between two points (x1, y1) and (x2, y2) is as follows: d=√[(x2-x1)^2+(y2-y1)^2]

function pointsValidation(arr){
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
 
    let xDiff = Math.abs(x2 - x1);
    let yDiff = Math.abs(y2 - y1);
 
    let firstCheck = calcolation(x1, y1);
    let secondCheck = calcolation(x2, y2);
    let thirdCheck = calcolation(xDiff, yDiff);
 
    if (firstCheck === Math.trunc(firstCheck)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
 
    if (secondCheck === Math.trunc(secondCheck)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    if (thirdCheck === Math.trunc(thirdCheck)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
 
    function calcolation (num1, num2){
        let square = Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2));
        return square;
    }
}
 
pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1])
