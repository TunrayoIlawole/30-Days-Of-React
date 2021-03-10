const yourAge = prompt("Enter your age");
const myAge = 22;

if (yourAge >= 18) {
    console.log("You are old enough to drive");
} else {
    const remainingYear = 18 - yourAge > 1 ? "years" : "year"
    console.log(`You are left with ${18 - yourAge} ${remainingYear} to drive`);
}

if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me`)
} else {
    console.log(`I am ${myAge - yourAge} years older than you`);
}


let a = 4;
let b = 3;

if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is greater than ${b}`);
}

a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is greater than ${b}`);


const number = prompt("Enter a number");

if (number % 2 === 0) {
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is an odd number`);
}