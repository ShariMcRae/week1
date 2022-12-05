class Calculator {
    constructor() {
        console.log("construct Calculator");
        this.total = 0;
    }
    validArguments(a, operator, b) {
        console.log("validArguments(a, operator, b)")
        const operators = ["+", "-", "*", "/"];
        
        if (isNaN(parseInt(a)))
            alert(a + " is not a number.");
        else if (isNaN(parseInt(b)))
            alert(b + " is not a number.");
        else if (!operators.includes(operator))
            alert(operator + " is not a valid operator.");
        else
            return true;
        return false;
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

class App{
    constructor() {
        this.calculator = new Calculator();
    }
    promptForInput() {
        
        // store the first number
        this.firstPrompt = prompt("Please enter first number.");
        this.firstNumber = parseInt(this.firstPrompt);
        console.log("firstNumber", this.firstNumber);

        // store the operator
        this.operator = prompt("Please enter operator (+, -, *, /).");
        console.log("operator", this.operator);

        // store the second number
        this.secondPrompt = prompt("Please enter second number.");
        this.secondNumber = parseInt(this.secondPrompt);
        console.log("secondNumber", this.secondNumber);

        if (this.calculator.validArguments(this.firstPrompt, 
                                            this.operator,
                                            this.secondPrompt)) 
            return true;
        
        else
            return false;    
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
            `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${this.calculator.total}`;
        console.log(equation);        
        alert(equation); 
    }
}

let app = new App();
if (app.promptForInput())
    if (app.performCalculations() != null)
        app.displayResult();
