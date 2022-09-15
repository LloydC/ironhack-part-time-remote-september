// var test = "Hello World"
let firstName = "Lloyd"; // string "", ''
let lastName = 'Chambrier'// string 
let age = 32; // number
let isMarried = false; //Boolean
let isTeacher = true; // Boolean
let firstTest; // undefined
let test = null; // 

// let emailAddressIsCorrect = true; 
// if (emailAddressIsCorrect){ 
//     console.log("Successfully subscribed")
// }
// else {
//     console.log("Please enter a valid email first")
// }


const teacher = { // representation of objects in the real world
    firstName: 'Lloyd',
    lastName: 'Chambrier',
    age: 32
}; 

teacher.firstName = 'Daniel';
console.log(teacher)
// console.log(typeof teacher.firstName)
// console.log(typeof age)

let teachingAssistant = {
    firstName: 'Ines',
    lastName: 'Herminio'
}

let favoriteFruit = {
    name: "Pineapple",
    color: "yellow",
    producedIn: ["Mexico", "Columbia", "South Africa"]
}

console.log(`${firstName} ${lastName} is ${age} years old`);

// console.log(2 + 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 - 2);

// console.log(age += 1) // --> age = age + 1 --> 33
// console.log(age -= 1) // --> age = age - 1 --> 32
// console.log(age *= 1) // --> age = age * 1 --> 32
// console.log(age /= 1) // --> age = age / 1 --> 32

// console.log(typeof age.toString())
test = 'Hello Class';
console.log(test.length)
console.log(firstName.toUpperCase());// LLOYD --> ['L', 'L', 'O', 'Y', 'D']
// console.log(firstName[0])
// console.log(firstName[1])
// console.log(firstName[2])
// console.log(firstName[3])
// console.log(firstName[4])
console.log(firstName.substring(2))
console.log(lastName.substring(0, 5))
console.log(lastName.slice(0, 5))

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'owl';

const testVar = isMarried ? 'True' : 'false';
console.log(testVar);
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// if(test.length < 10){
//     console.log('There is less then 10 characters in this string')
// }
// else {
//     console.log('There is more then 10 characters in this string')
// }
// equivalent to console.log(firstName + " " + lastName);
// let teachingTeam = [teacher, teachingAssistant1, teachingAssistant2]; //


// console.log(lastName.toUpperCase());
// console.log(firstName.repeat(3));
// console.log(hobbies.length)


// IF STATEMENT

// if(hobbies[0].toLowerCase() === "yoga"){
//     // console.log("Namaste");
//     return "Namaste";
// }
// else if(hobbies[1].toLowerCase() === "running"){
//     // console.log("Time for a jog");
//     return "Time for a jog";
// }
// else {
//     // console.log('Time to pick a hobby :)')
//     return "Time to pick a hobby :)";
// }

// let a = 45;
// let b = 98;

// if(a !== b){
//     return a+b;
// }
// else {
//     return "a is equal to b";
// }

// let input = 'a';


// SWITCH STATEMENT

// switch(input){
//     case 'a':
//         console.log('Case a')
//         return;
//     case 'b':
//         console.log('Case b');
//         return;
//     default:
//         console.log('no case')
// }

// TERNARY OPERATOR

// const evaluateHobby = hobbies[0].toLowerCase() === "Yoga" || hobbies[1].toLowerCase() === "running" ? "Nice hobbies" : "Time to pick a hobby";
// console.log(evaluateHobby);

// 4 == 4 --> value
// 4 === "4" --> data type && value

let hobbies = ["Yoga", "Running", "Traveling", "Watching animes", "Reading"];

// FOR LOOP

// for(let i = 0; i < hobbies.length; i++){
//     if(i % 2 === 1){
//         console.log('The best hobby is ', hobbies[i]);
//     }
//     else {
//         console.log('The most fun hobby is ', hobbies[i]);
//     } 
// }

// WHILE LOOP

// let i = hobbies.length - 1;

// while(i >= 0){
//     console.log(hobbies[i])
//     i--;
// }