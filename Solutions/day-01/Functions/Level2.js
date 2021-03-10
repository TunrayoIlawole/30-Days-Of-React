const solveQuadratic = (a, b, c) => {
    const x = (-b + Math.sqrt((Math.pow(b, 2) - (4 * a * c)))) / 2 * a;

    return x;
}

console.log(solveQuadratic(1, 4, 4));

const printArray = (arr) => {
    arr.forEach(value => {
        console.log(value);
    });
}

const showDateTime = () => {
    const today = new Date();
    const day = today.getDay();
    const month = today.getMonth();
    const year = today.getFullYear();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    
    const date = `${day}/${month}/${year} ${hours}:${minutes}`;

    console.log(date);
}

showDateTime();

const swapValues = (x, y) => {
    return `x = ${y}, y = ${x}`;
}

const reverseArray = (arr) => {
    const reversedArray = [];

    arr.forEach(value => {
        reversedArray.unshift(value);
    })

    return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

const capitalizeArray = (arr) => {

    const capitalizedArray = arr.map(word => {
        return word.replace(word[0], word[0].toUpperCase());
    })

    return capitalizedArray;

}

console.log(capitalizeArray(["i", "want", "to", "go"]));

const addItem = (arr, item) => {
    const newArray = [ ...arr, item];

    return newArray;
}

console.log(addItem(['we', 4, true], 'hey'));

const removeItem = (arr, index) => {
    return arr.splice(index, 1);
}

console.log(removeItem([4, 5, 6, 7, 8], 1));

const evenAndOdds = (number) => {
    let even = 0;
    let odd = 0;

    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            even += 1
        } else {
            odd += 1
        }
    }

    return `Even = ${even}, Odd = ${odd}`;
}

console.log(evenAndOdds(100));

function sum() {
    const arr = Array.from(arguments);

    const sum = arr.reduce((a, b) => a + b, 0);

    return sum;
}

console.log(sum(1, 2, 3));

const userIdGenerator = () => {
    const possibleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let userId = "";

    for (let i = 0; i < 7; i++) {
        userId += possibleArray[(Math.floor(Math.random() * possibleArray.length))];
    }

    return userId;
}

console.log(userIdGenerator());