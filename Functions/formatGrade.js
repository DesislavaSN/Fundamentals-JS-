// A function that receives a grade between 2.00 and 6.00.

function formatGrade(grade) {
    let description = "";
    let formatedGrade = grade.toFixed(2);
    if (grade < 3) {
        formatedGrade = "2";
        description = "Fail"
    } else if (grade < 3.5) {
        description = "Poor"
    } else if (grade < 4.5) {
        description = "Good";
    } else if (grade < 5.5) {
        description = "Very good"
    } else {
        description = "Excellent"
    }

    console.log(`${description} (${formatedGrade})`);
}
