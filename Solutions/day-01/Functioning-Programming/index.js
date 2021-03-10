const products = [
    {product: 'banana', price: 3},
    {product: 'mango', price: 6},
    {product: 'potato', price: ''},
    {product: 'avocado', price: 8},
    {product: 'coffee', price: 10},
    {product: 'tea', price: ''}
]

products.forEach(product => {
    console.log(product.price);
})

products.forEach(product => {
    if (product.price !== "") {
        console.log(`The price of ${product.product} is ${product.price} euros.`)
    } else {
        console.log(`The price of ${product.product} is unknown.`);
    }
})

let sum = 0;
products.forEach(product => {
    if (product.price !== "") {
        sum += product.price;
    }
});

console.log(sum);

const prices = products.map(product => {
    return product.price;
})

console.log(prices);

const notNullPrices = products.filter(product => product.price !== "");

console.log(notNullPrices);

const sumPrices = products.filter(product => product.price !== "").map(product => product.price).reduce((acc, cur) => acc + cur);

console.log(sumPrices);

const sumPrices2 = prices.reduce((acc, curr) => parseInt(acc) + curr);
console.log(sumPrices2);

const firstProduct = products.find(product => product.price === "");
console.log(firstProduct);

const firstProductIndex = products.findIndex(product => product.price === "");
console.log(firstProductIndex);

const doSomeProductsHavePrice = products.some(product => product.price !== "");
console.log(doSomeProductsHavePrice);

const doEveryProductsHavePrice = products.every(product => product.price !== "");
console.log(doEveryProductsHavePrice);

/*
forEach - calls a function for each array element
Map - Creates a new array with the result of calling a function for each array element
Filter - Creates a new array with every element in an array that pass a test
Reduce - Reduces the values of an array to a single value
*/

/*
Filter - Creates a new array with every element in an array that pass a test
Find - Returns the values of the first element in an array that passes a test
FindIndex - Returns the index of the first element in an array that passes a test
*/

/*
Some - Checks if any of the elements in an array pass a test
Every - Checks if every elements in an array pass a test
*/