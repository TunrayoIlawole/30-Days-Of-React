const users = {
    Alex: {
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JavaScript"],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: "asab@asab.gmail.com",
        skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: "daniel@daniel.gmmail.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
        },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};

const countries = {
    one: {
        name: "Nigeria",
        capital: "Abuja",
        population: "Two Billion",
        languages: ["English", "Yoruba", "Igbo", "Hausa"]
    }
}

let skillsCount = 0;
let loggedInUsers = 0;
let greaterThan50 = 0;


const userValues = Object.entries(users);

userValues.forEach(userValue => {
    if (userValue[1].skills.length > skillsCount) {
        skillsCount = userValue[1].skills.length;
    }

    if (userValue[1].isLoggedIn) {
        loggedInUsers += 1;
    }

    if (userValue[1].points >= 50) {
        greaterThan50 += 1;
    }

    if (userValue[1].skills.includes("MongoDB") && userValue[1].skills.includes("Express") && userValue[1].skills.includes("React") && userValue[1].skills.includes("Node")) {
        console.log(userValue[0]);
    }
})

userValues.forEach(userValue => {
    if (userValue[1].skills.length === skillsCount) {
        console.log(userValue[0]);
    }
})

console.log(skillsCount);
console.log(loggedInUsers);
console.log(greaterThan50);

const newUser = Object.assign({}, users, {Tunrayo : { email: "motun@rayo.gmail.com", skills: ["HTML", "CSS", "JavaScript"], age: 22, isLoggedIn: false, points: 80}});

console.log(newUser);

const userKeys = Object.keys(users);
console.log(userKeys);

const userValues2 = Object.values(users);
console.log(userValues2);

console.log(`${countries.one.name}'s capital is ${countries.one.capital}. It has a population of ${countries.one.population} and numerous languages are spoken there such as ${countries.one.languages}.`);