const emptyArray = [];

const animes = ["Naruto", "Fullmetal Alchemist", "Youjo Senki", "K", "Jujutsu Kaisen", "Bleach", "Haikyuu"];

// length of array
console.log(animes.length);

// first item
console.log(animes[0]);

// middle item 
const middleIndex1 = animes.length % 2 === 0 ? animes.length / 2 : ((animes.length / 2) - 0.5);
console.log(animes[middleIndex1]);

// last item
console.log(animes[animes.length - 1]);

// (5)
const mixedDataTypes = [1, true, "Baboon", ["King", "Kong"], {month: "September"}, 56];

console.log(mixedDataTypes.length);

// (6)
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log(itCompanies);

console.log(itCompanies.length);

// first company
console.log(itCompanies[0]);

// middle company
const middleIndex = itCompanies.length % 2 === 0 ? itCompanies.length / 2 : ((itCompanies.length / 2) - 0.5);
console.log(itCompanies[middleIndex]);

// last company
console.log(itCompanies[itCompanies.length - 1]);

// each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
};

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
};

// Like a sentence
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies`);

if (itCompanies.indexOf("Facebook") !== -1) {
    console.log("Facebook");
} else {
    console.log("Not found");
}

// let characterCount = 0
// for (let i = 0; i < itCompanies.length; i++) {


// };

// (15)
const sortedArray = itCompanies.sort();
console.log(sortedArray);

// (16)
const reversedArray = itCompanies.reverse();
console.log(reversedArray);

// (17)
console.log(itCompanies.slice(3));

// (18)
console.log(itCompanies.slice(0, itCompanies.length - 3));

// (19)
console.log(itCompanies.slice(middleIndex, middleIndex + 1));

// (20)
console.log(itCompanies.shift());

// (21)
console.log(itCompanies.splice(middleIndex -1 , 1));

// (22)
console.log(itCompanies.pop());

// (23)
console.log(itCompanies.splice(0, itCompanies.length));