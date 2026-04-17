function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        default:
            result = "Invalid operator";
    }

    return result;
}

let num1 = 10;
let num2 = 5;
let operator = "+"; 

console.log( calculator(num1, num2, operator));
