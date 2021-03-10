const score = 78;
let grade = 0;

if (score >= 80 && score <= 100) {
    grade = "A"
} else if (score >= 70 && score <= 79) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else if (score >= 0 && score <= 49) {
    grade = "E";
}

console.log(grade);

let month = prompt("Enter a month");
month = month.toLowerCase();

if (month === "september" || month === "october" || month === "november") {
    console.log("The season is Autumn");
} else if (month === "december" || month === "january" || month === "february") {
    console.log("The season is winter");
} else if (month === "march" || month === "april" || month === "may") {
    console.log("The season is Spring");
} else if (month === "june" || month === "july" || month === "august") {
    console.log("The season is Summer");
}

let day = prompt("Enter a day");
day = day.toLowerCase();

if (day === "saturday" || day === "sunday") {
    console.log(`${day} is a weekend`);
} else {
    console.log(`${day} is a working day`);
}