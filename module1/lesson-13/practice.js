// console.log('hello') // exec 1
// console.log('I am running synchronously') // wait for exec 1 then exec 2
// console.log('indeed') // wait for exec 2 then exec 3

// let firstName = 'Lloyd';
// console.log(firstName); // execute first, exec time 0.1s
// //fetch('http://example.com/movies.json') // makes a request to fetch data,exec time 5s
// console.log(sayHi()); // wait until line 2 is done, exec time 0.1s

// sayHi(); // exec 0.1s
// sayGoodbye(); // exec 2s
// makeCoffee('Lloyd'); // exec 0.3s

function sayHi(){ // exec 0.1s
    console.log('Hi people');
    return 'Hi people'
}

function sayGoodbye(){
    setTimeout(()=> console.log('Bye People'), 2000)

}

function makeCoffee(name){
    setTimeout(()=> console.log('Making coffee', name), 300)
}

const executeCallback = (callback) => {
    return callback();
}


// const resultOne = executeCallback(makeCoffee) // wait 0.3s --> execute itself first --> return value second
// const resultTwo = executeCallback(sayHi) // wait 0.1s --> execute itself second --> return value first 

// makeCoffee(resultOne); // execute first --> wait for resultOne --> return something second
// makeCoffee(resultTwo); // execute second --> wait for resultTwo --> return something first


// const timeoutId = setTimeout(sayHi, 1000);
// const anotherTimeoutId = setTimeout(sayHi, 2000)

// clearTimeout(anotherTimeoutId);
// clearTimeout(timeoutId)

let counter = 1;


const callbackFunction = function () {
  console.log(counter);
  counter += 1;
  let timeoutId = setTimeout(callbackFunction, 1000);
 
  
  if (counter > 10) {
    clearTimeout(timeoutId);
  }
};

// callbackFunction() // let timeoutId = setTimeout(callbackFunction, 1000);


let i = 1;
// const intervalId = setInterval(function () {
//   console.log(i);
 
//   i++;
 
//   if (i > 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);
 

let j = 10;
// const intervalIdTwo = setInterval(function () {
//   if (j > 0) {
//     console.log(j);
//   } else {
//     console.log('Pop!');
//     clearInterval(intervalIdTwo);
//   }
 
//   j--;
// }, 1000);


// sayGoodbye();
// makeCoffee();
// sayHi();

//COPY USING Object.assign()
// const book1 = {
//     author: 'Charlotte Bronte',
//   };
   
// const book2 = Object.assign({}, book1);
   
// console.log(book2); // => { author: "Charlotte Bronte" }
// console.log(book1 === book2); 




// COPY USING SPREAD OPERATOR
const book1 = {
    author: 'Charlotte Bronte',
  };

const book2  = {...book1}

console.log(book2 === book1)

const students = ['Axel', 'Vira', 'Arcadio']

const copyOfStudents = [...students]

console.log(copyOfStudents === students)


// // Callback Examples for setInterval function
// // const timeIntervalId = setInterval(()=> console.log('test'), 2000);
// // const timeIntervalId2 = setInterval(() => makeCoffee('Lloyd'), 2000);
// // const timeIntervalId3 = setInterval(function(){
// // console.log('test')}, 2000);