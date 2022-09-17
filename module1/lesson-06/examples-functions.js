// Day 6

// Write a function that takes in a parameter "name", tells the user what name was entered and returns it.
// i.e: "John" ---> "Hi John"

function sayName(name){
    return `Hi ${name}`
}

console.log(sayName("John"));

// Write a function that takes in a parameter "input" and returns the last character in that string
// i.e: "Rijksmuseum" ---> "m"
function lastCharacter(input){
    // how to print the last index of the input
   return input[input.length - 1];
}

console.log(lastCharacter("Rijksmuseum"));

// Write a function that takes in one parameter "length" and prints out that many stars
// i.e: 3 ---> ***
function printStars(length) {
    return "*".repeat(length);
}

// console.log(printStars(3))
// Write a function that takes in two parameters "length" and "height" and prints out a rectangle of stars
// i.e: 3,2 ---> ***
//               ***
function starRectangle(length, height){
    for(i = 0; i < height; i++){
        console.log("*".repeat(length)) ;
    }
}

starRectangle(3,2)
// Write a function that takes in an array of integers and returns the average of the array
// i.e: [2,5,8] ---> 5
//      [1,2,3] ---> 2

function average(integerArray){
    // Sum all the numbers
    let sum = 0;
    for(let i = 0 ; i < integerArray.length; i++){
        sum += integerArray[i];
    }
    // Divide by the length of the array  
    return sum/integerArray.length;
}

console.log(average([2,5,8]))
console.log(average([1,2,3]))