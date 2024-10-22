class Calculator {
    constructor() {
        this.operations = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b
        };
    }
    calculate(operator, ...numbers) {
        if (operator in this.operations) {
            
            let result = numbers[0];
            for (let i = 1; i < numbers.length; i++) {
                result = this.operations[operator](result, numbers[i]);
            }
            return result;
        }
    }
    addOperation(operator, newFunction) {
        if (typeof newFunction === "function") {
            this.operations[operator] = newFunction;
        }
    }
}

const calc = new Calculator();

console.log(calc.calculate("+", 1, 3));
console.log(calc.calculate("-", 100, 50, 25, 5));
calc.addOperation("*", (a, b) => a * b);
console.log(calc.calculate("*", 2, 4, 6));
calc.addOperation("/", (a, b) => a / b);
console.log(calc.calculate("/", 100, 25, 2));
calc.addOperation("**", (a, b) => a ** b);
console.log(calc.calculate("**", 2, 2, 2));

/*
Ensimmäinen toteutus, joka toimii myös osittain.
class Calculator {
    constructor() {
        this.addition = "+";
        this.substraction = "-";
        this.multiplication; // *
        this.division; // /
        this.exponentiation; // **
    }
    calculate() {
        let total = arguments[1];
        if (arguments[0] === this.addition) {
            for (let i = 2; i < arguments.length; i++) {
                total += arguments[i];
            } 
        } else if (arguments[0] === this.substraction) {
            for (let i = 2; i < arguments.length; i++) {
                total -= arguments[i];
            }
        } else if (arguments[0] === this.multiplication) {
            for (let i = 2; i < arguments.length; i++) {
                total *= arguments[i];
            } 
        } else if (arguments[0] === this.division) {
            for (let i = 2; i < arguments.length; i++) {
                total /= arguments[i];
            }
        } else if (arguments[0] === this.exponentiation) {
            for (let i = 2; i < arguments.length; i++) {
                total **= arguments[i];
            } 
        } 
        return total;
    }
    addOperation(operation) {
        if (operation === "*") {
            this.multiplication = "*";
        }
        if (operation === "/") {
            this.division = "/";
        }
        if (operation === "**") {
            this.exponentiation = "**";
        }
    }
}
*/
