const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
]

if (webTechs.indexOf("Sass") !== -1) {
    console.log("Sass is a CSS preprocessor");
} else {
    webTechs.push("Sass");
}

console.log(webTechs);