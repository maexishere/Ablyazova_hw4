const words = [];
const word = prompt("Words");
switch (word) {
  case "stop":
      console.log("You entered stop");
      break;
  default:
    words.push(word)
    break;
}
console.log("You entered the following words:" (words));