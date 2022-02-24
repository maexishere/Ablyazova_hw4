const values = [3, 11, 7, 2, 9, 10];
console.log(values.reduce((a, b) => a + b, 0));
console.log(Math.min(...values));
console.log(Math.max(...values));