class Calculator {
    constructor() {
        this.value = 0;
    }
    add(number) {
        this.value += number;
        return this;
    }
    subtract(number) {
        this.value -= number;
        return this; 
    }
    out() {
        return this.value;
    };
}

const calculator = new Calculator();
const result = calculator.add(4).add(5).subtract(3).out();

console.log(result);