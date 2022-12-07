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
    // Prompt for and validate first number.
    // Set this.firstNumber.
    hasValidFirstNumber() {

        console.log("hasValidFirstNumber()");
        let number = this.getValidNumber("Please enter first number.");
        if (number !== null) {
            this.firstNumber = number;
            return true;
        } else
            return false;
    }
    // Prompt for and validate second number.
    // Set this.secondNumber.
    hasValidSecondNumber() {

        console.log("hasValidSecondNumber()");
        let number = this.getValidNumber("Please enter second number.");
        if (number !== null) {
            this.secondNumber = number;
            return true;
        } else
            return false;
    }
    // Prompt for number using given phrase.
    // Return null if number is invalid, otherwise
    // return the number.
    getValidNumber(phrase) {

        console.log("Start of getValidNumber(), phrase: ", phrase);

        // prompt for the number using the given phrase
        let strNumber = prompt(phrase);
    
        // If the number is empty (blank, null).
        if (!strNumber) {

            // If they entered an empty string,
            // notify them of invalid entry.
             // Otherwise, they hit cancel, so do nothing.
            if (strNumber !== null) 
                alert("Invalid number.");
    
            // Return null.
            return null;
        }
    
        // If they entered something other than a number,
        // display error message and return null.
        let number = parseInt(strNumber);
        if (isNaN(number)) {

            alert("'" + strNumber + "' is not a number.");
            return null;
        }
        console.log("End of getValidNumber(), number", number);
    
        return number;
    }    
    // Prompt for and validate operator
    // and set this.operator.
    // Return true if the opertor is valid.
    hasValidOperator() {

        // Prompt user for the operator.
        this.operator = prompt("Please enter operator (+, -, *, /).");
        console.log("operator", this.operator);

        // If the operator is empty.
        if (!this.operator) {

             // If they entered an empty string,
             // notify them of invalid entry.
             // Otherwise, they hit cancel, so do nothing.
             if (this.operator !== null) 
                alert("Invalid operator.");
          
            // Return false.
            return false;
        }

        // If the operator is not among the valid list of operators,
        // notify the user and return false.
        const operators = ["+", "-", "*", "/"];
        if (!operators.includes(this.operator)) {

            alert("'" + this.operator + "' is not a valid operator.");
            return false;
        }

        // Otherwise, operator is valid.
        // Return true.
        return true;
    }
    // call the appropriate math method
    // depending on the operator and
    // return total
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
    // construct string showing the entire 
    // operation and result
    // display using an alert
    displayResult() {
         
        let equation = 
            `${this.firstNumber} ${this.operator} ${this.secondNumber} = ` +
            `${this.calculator.total}`;
        console.log(equation);        
        alert(equation); 
    }
}

let app = new App();

if (app.hasValidFirstNumber() && 
    app.hasValidOperator() && 
    app.hasValidSecondNumber()) {
        
    if (app.performCalculations() != null)
        app.displayResult();
} else
    alert("Operation canceled.");
