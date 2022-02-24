const num1 = Number(prompt("Number 1: "));
const num2 = Number(prompt("Number 2: "));
const op = prompt("Operation");
switch (op) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2
    break;
  default:
    console.log("Invalid")
    break;
}
console.log(`${num1} ${op} ${num2} = ${result}`)