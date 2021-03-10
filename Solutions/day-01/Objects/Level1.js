const dog = new Object();
console.log(dog);

dog.name = "Ringo";
dog.legs = 4;
dog.color = "brown";
dog.age = 2;
dog.bark = function() {
    return "Woof! Woof!";
}

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);

dog.breed = "Mastiff";
dog.getDogInfo = function() {
    return `${this.name} aged ${this.age} is a ${this.breed}`;
}