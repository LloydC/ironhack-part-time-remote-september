// Function declaration
function calcSum(x, y) {
    return x + y;
  }
   
  calcSum(12, 23);

// Function expression

const calcSum = function (x, y){
    return x + y;
}

// Callback 

function eatDinner(callback) {
    console.log('Eating the dinner!');
    callback();
}
   
function eatDessert() {
    console.log('Eating the dessert!');
}

eatDinner(eatDessert);

// Anonymous functions
function printName(name, anonFunc) {
    anonFunc(name);
  }
   
printName('sandra', function (name) {
    console.log(name[0].toUpperCase() + name.slice(1));
});