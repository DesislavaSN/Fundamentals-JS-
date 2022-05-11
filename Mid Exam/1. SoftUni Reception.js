//Problem 1. SoftUni Reception
/* Three employees are working on the reception all day. Each of them can handle a different number of students per hour. 
Your task is to calculate how much time it will take to answer all the questions of a given number of students.
Every fourth hour, all employees have a break, so they don't work for an hour.
The function calculates the time needed to answer all the student's questions and print in the following format: "Time needed: {time}h." */

function softuniReception(input) {
    
    input = input.map(Number);
    let employee1 = input[0];
    let employee2 = input[1];
    let employee3 = input[2];
    let students = input[3];
    let efficiency = employee1 + employee2 + employee3;
    let time = 0;

    while (students > 0) {
        time++;
        if (time % 4 !== 0) {
            students -= efficiency;
        }
    }

    console.log(`Time needed: ${time}h.`);
}

softuniReception(['5', '6', '4', '20']); //2h
softuniReception(['1', '2', '3', '45']); //10h
softuniReception(['3', '2', '5', '40']); //5h
