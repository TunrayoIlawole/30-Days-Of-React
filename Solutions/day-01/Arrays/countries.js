const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
]

if (countries.indexOf('Ethiopia') !== -1) {
    console.log("ETHIOPIA");
} else {
    countries.push('Ethiopia');
}

console.log(countries.slice(0, countries.length - 1));

let median;
let middleIndex = countries.length / 2;
if (countries.length % 2 === 0) {
    let median1 = countries[middleIndex];
    let median2 = (countries[middleIndex + 1]);
    median = [countries[median1], countries[median2]];
} else {
    median = countries[middleIndex - 0.5];
}

console.log(median);

let countries1 = [];
let countries2 = [];
let oddIndex = (countries.length / 2) + 0.5
if (countries.length % 2 === 0) {
    countries1 = countries.slice(0, countries.length/ 2);
    countries2 = countries.slice(- countries.length / 2);
} else {
    countries1 = countries.slice(0, oddIndex);
    countries2 = countries.slice(- (oddIndex - 1), countries.length);
    console.log(countries1);
    console.log(countries2);
}