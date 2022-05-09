function simpleCalc(num1, num2, operator){
    let res = 0;
    switch(operator){
        case "multiply": res = num1 * num2; break;
        case "divide": res = num1 / num2; break;
        case "add": res = num1 + num2; break;
        case "subtract": res = num1 - num2; break;
        default: "Error"; break;
    }
    return res;
}
