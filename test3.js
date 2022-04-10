const fact = (number) => {
    if (number == 1) {
       return 1;
    }
    return number * fact(number-1);
}

const result = fact(4);

console.log(result);