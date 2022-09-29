
console.log(calcSum(12, 23));
// Function declaration
function calcSum(x, y) {
    return x + y;
}
   

// Function expression
const calcSumTwo = function (x, y){
    return x + y;
}

console.log(calcSumTwo(12,24))

// Callback 

function eatDinner(callback, dessertName) {
    console.log('Eating the dinner!');
    callback(dessertName);
}
   
function eatDessert(dessertName) {
    console.log('Eating the dessert!' + dessertName);
}

eatDinner(eatDessert, 'rice pudding');

// Anonymous functions
function printName(name, anonFunc) {
    anonFunc(name);
}
   
printName('sandra', function (name) {
    console.log(name[0].toUpperCase() + name.slice(1));
});

// Arrow functions
// function calculateSum(x, y) {
//     return x + y;
// }

const calculateSum = (x, y) => { return x + y;}

// const calculateSumTwo = function (x, y){
//     return x + y;
// }

const calculateSumTwo = (x, y) => x + y;

// function eatingDinner(callback, dessertName) {
//     console.log('Eating the dinner!');
//     callback(dessertName);
// }

const eatingDinner = (callback, dessertName) => callback(dessertName);

eatingDinner(eatDessert, 'chocolate mousse')