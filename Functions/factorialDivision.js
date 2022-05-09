// A function that receives two integer numbers. 
// Calculate the factorial of each number. Divide the first result by the second and print the division formatted to the second decimal point.


function factorialDivision(num1, num2){
    let result = factorialNum(num1) / factorialNum(num2);
    console.log(result.toFixed(2));
 
    function factorialNum(num){
        let res = 1;
        for(let i = 1; i < num; i++){
            // console.log(i);
            res *= (i * 1);
        }
        res *= num;
        return res;
    }
}
