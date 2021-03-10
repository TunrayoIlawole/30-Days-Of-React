// 1
const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}

// 2
const addNumbers = (a, b) => {
    return a + b;
}

// 3
const areaCircle = (radius) => {
    return Math.PI * radius * radius;
}

const convertClesiusToFahrenheit = (c) => {
    const f = (c * 9/5) + 32;

    return f;
}

const calculateBMI = (height, weight) => {
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return `Your BMI is ${bmi}. You are underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return `Your BMI is ${bmi}. Your weight is normal`;
    } else if (bmi >= 25 && bmi < 29.9) {
        return `Your BMI is ${bmi}. You are overweight`;
    } else if (bmi > 30) {
        return `Your BMI is ${bmi}. You are obese`;
    }
}

const checkSeason = (month) => {
    if (month === "september" || month === "october" || month === "november") {
        console.log("The season is Autumn");
    } else if (month === "december" || month === "january" || month === "february") {
        console.log("The season is winter");
    } else if (month === "march" || month === "april" || month === "may") {
        console.log("The season is Spring");
    } else if (month === "june" || month === "july" || month === "august") {
        console.log("The season is Summer");
    }
}