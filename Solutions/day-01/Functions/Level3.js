const userIdGenerator = (num) => {
    const possibleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let userId = "";

    for (let i = 0; i < num; i++) {
        userId += possibleArray[(Math.floor(Math.random() * possibleArray.length))];
    }

    return userId;
}

const userIdGeneratedByUser = () => {
    const numChar = prompt("Enter the number of characters");
    const numIds = prompt("Enter the number of ids to be generated");

    for (i = 0; i < numIds; i++) {
        console.log(userIdGenerator(numChar));
    }
}

userIdGeneratedByUser();

const hexColors = () => {
    const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (i = 0; i < 6; i++) {
        hexColor += hexNumbers[(Math.floor(Math.random() * hexNumbers.length))];
    }

    return hexColor;
}

const rgbColors = () => {
    const rgbNumber = Math.floor(Math.random() * 255);

    let rgbColor = `rbg(${rgbNumber}, ${rgbNumber}, ${rgbNumber})`;

    return rgbColor;
}

const generateColors = (type, num) => {
    if (type === "hexa") {
        for (let i = 0; i < num; i++) {
            console.log(hexColors());
        }
    } else if (type === "rgb") {
        for(let i = 0; i < num; i++) {
            console.log(rgbColors());
        }
    }
}

generateColors("hexa", 3);

const shuffleArray = (arr) => {
    const shuffledArray = [];

    for (i = 0; i < arr.length; i++) {
        shuffledArray.push(arr[Math.floor(Math.random() * arr.length)]);
    }

    return shuffledArray;
}

console.log(shuffleArray([2, 3, 4, 5, 6]));


const factorial = (num) => {
    if (num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(6));

const average = (arr) => {
    let arraySum = 0;
    for (i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) !== "number") {
            console.log("All values in the array must be numbers");
            return;
        } else {
            arraySum += arr[i];
        }
    }

    const average = arraySum / arr.length;
    return average;
}

console.log(average([1, 2, 3, 4, 5]));