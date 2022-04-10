/* tail recursive 
Maximum call stack size exceeded  */
const cal = (number, acc) => {
    if (number ==0) {
        return acc;
    }
    return cal(number - 1, number * acc);
}

const fact = (number) => {   
    return cal(number, 1);
}
// const result = fact(1000000);

// console.log(result);

/* javascript Array.prototype.reduce */
const list = [];

for (let index = 1; index <= 1000000; index++) {
    list.push(index);
}

const value = list.reduce((acc, cur)=>{
    return acc * cur;
}, 1);

console.log(value);