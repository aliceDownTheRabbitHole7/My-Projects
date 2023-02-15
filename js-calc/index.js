let trailingResult = 0;
let operationOptions = ['add', 'subtract', 'multiply', 'divide'];
let workingOperation = "";

// Display inputs

function updateDisplay(input) {
let display = document.getElementById("display");

if (display.innerHTML === "0" && operationOptions.indexOf(input) === -1) {
if (input === 'decimal') {
    display.innerHTML = '0.';
} else if (input === "negative") {
    if (display.innerHTML.indexOf("-1") === -1) {
    display.innerHTML = "-" + display.innerHTML
    } else {
    display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
    }
} else {
    display.innerHTML = input;
}

} else if (operationOptions.indexOf(input) >= 0) {
if (trailingResult === display.innerHTML) {

    // Operator button pressed twice

    workingOperation = input;
} else if (workingOperation === "") {

    // No operator

    workingOperation = input;
    trailingResult = display.innerHTML;
    display.innerHTML = 0;   
} else {

    // Set operator

    trailingResult = calculate(trailingResult, display.innerHTML, workingOperation);
    display.innerHTML = 0;
    workingOperation = input;
}

// Equals functionality

} else if (input === 'equals') {
display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);
trailingResult = 0;
workingOperation = "";

// Decimal functionality

} else if (input === 'decimal') {
if (display.innerHTML.indexOf(".") === -1) {
    display.innerHTML += "."
} else {
    console.log("You already clicked the decimal.");
}

// Negative functionality

} else if (input === 'negative') {
if (display.innerHTML.indexOf("-1") === -1) {
    display.innerHTML = "-" + display.innerHTML
} else if (display.innerHTML.indexOf("-1") > -1) {
    display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
}

} else {
display.innerHTML += input;
}
}

// Clear display  

function clearDisplay() {
let display = document.getElementById("display");
display.innerHTML = 0;
} 

// Calculation

function calculate(firstNumber, secondNumber, operation) {
let result;
firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);
switch(operation) {
case "add":
    result = firstNumber + secondNumber;
    break;
case "subtract":
    result = firstNumber - secondNumber;
    break;
case "multiply":
    result = firstNumber * secondNumber;
    break;
case "divide":
    result = firstNumber / secondNumber;
    break;
default:
    console.log("Something went wrong.");
}
return result.toString();
}