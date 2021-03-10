let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python";

for (let i = 0; i < text.length; i++) {
    text = text.replace(',', '');
}

text = text.split(' ');
console.log(text);
console.log(text.length);

// (3)
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes("Sugar")) {
    shoppingCart.push("Sugar");
}

let isAllergic = true;
if(isAllergic) {
    let honeyIndex = shoppingCart.indexOf("Honey");
    
    shoppingCart.splice(honeyIndex, 1);
    console.log(shoppingCart);
}

let teaIndex = shoppingCart.indexOf("Tea");
shoppingCart[teaIndex] = "Green Tea";

console.log(shoppingCart);

// (6)
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);