class Calculator {
    constructor() {
        console.log("construct Calculator");
        this.total = 0;
    }
    // add 
    addNumbers(a, b) {
        console.log("addNumbers(a, b)");
        return this.total = a + b;
    }
    // subtract
    subtractNumbers(a, b) {
        console.log("subtractNumbers(a, b)");
        return this.total = a - b;
    }
    // multiply
    multiplyNumbers(a, b) {
        console.log("multiplyNumbers(a, b)");
        return this.total = a * b;
    }  
    // divide
    divideNumbers(a, b) {
        console.log("divideNumbers(a, b)");
        return this.total = a / b;
    }
}

class App {
    constructor() {
        this.calculator = new Calculator();
    }
    // prompt for and validate first number
    hasValidFirstNumber() {

        console.log("hasValidFirstNumber()");
        let number = this.getValidNumber("Please enter first number.");
        if (number !== null) {
            this.firstNumber = number;
            return true;
        } else
            return false;
    }
    // prompt for and validate second number
    hasValidSecondNumber() {

        console.log("hasValidSecondNumber()");
        let number = this.getValidNumber("Please enter second number.");
        if (number !== null) {
            this.secondNumber = number;
            return true;
        } else
            return false;
    }
    // Prompts for number using given phrase, and
    // returns null if provided number is invalid.
    getValidNumber(phrase) {

        console.log("Start of getValidNumber(), phrase: ", phrase);

        // prompt for the number using the given phrase
        let strNumber = prompt(phrase);
    
        // If the number is empty (blank, null or canceled).
        if (!strNumber) {

            // If they didn't hit cancel button,
            // notify them of invalid entry.
            if (strNumber !== null) 
                alert("Invalid number.");
    
            // Otherwise, just exit.
            return null;
        }
    
        // if number is not a number
        let number = parseInt(strNumber);
        if (isNaN(number)) {
            alert("'" + strNumber + "' is not a number.");
            return null;
        }
        console.log("End of getValidNumber(), number", number);
    
        return number;
    }    
    // prompt for and validate operator
    hasValidOperand() {

        // store the operator
        this.operator = prompt("Please enter operator (+, -, *, /).");
        console.log("operator", this.operator);

        // if the operator is empty
        if (!this.operator) {
             // if they didn't hit cancel button
             if (this.operator !== null) 
                alert("Invalid operator.");
          
            return false;
        }

        // if operator is among the valid list of operators
        const operators = ["+", "-", "*", "/"];
        if (!operators.includes(this.operator)) {
            alert("'" + this.operator + "' is not a valid operator.");
            return false;
        }

        return true;
    }
    performCalculations() {

        switch(this.operator) {
            case "+":
                this.calculator.addNumbers(this.firstNumber, this.secondNumber);
                break;
            case "-":
                this.calculator.subtractNumbers(this.firstNumber, this.secondNumber);
                break;
            case "*":
                this.calculator.multiplyNumbers(this.firstNumber, this.secondNumber);
                break;
            case "/":
                this.calculator.divideNumbers(this.firstNumber, this.secondNumber);
                break;                       
            default:
                alert("Invalid operator \'" + this.operator + "\'.");
                return null;
        }
        return this.calculator.total;

    }
    displayResult() {
         
        let equation = 
            `${this.firstNumber} ${this.operator} ${this.secondNumber} = ` +
            `${this.calculator.total}`;
        console.log(equation);        
        alert(equation); 
    }
}

let app = new App();
if (app.hasValidFirstNumber() && app.hasValidOperand() && app.hasValidSecondNumber()) {
    if (app.performCalculations() != null)
        app.displayResult();
}
