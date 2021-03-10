const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sortedArray = ages.sort();
const minAge = sortedArray[0];
const maxAge = sortedArray[sortedArray.length - 1];
const range = maxAge - minAge;

console.log(minAge, maxAge, range);

let median = 0;
let middleIndex = 0;
if (ages.length % 2 === 0) {
    middleIndex = ages.length / 2;
    median = (ages[middleIndex] + ages[middleIndex + 1]) / 2;
    console.log(median);
} else {
    median = ages[middleIndex + 0.5];
}

let totalAges = 0;
let average = 0;
for (let i = 0; i < ages.length; i++) {
    totalAges += ages[i];
    average = totalAges / ages.length;
}

console.log(average);

console.log(Math.abs(minAge - average));
console.log(Math.abs(maxAge - average));