const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
    name: 'Circle',
    circumference: 2 * Math.PI * r,
    area: Math.PI * r ** 2,

    describe() {
        return `Its circumference is ${circle.circumference} and its area is ${circle.area}`;
    }
};
console.log(circle.describe());