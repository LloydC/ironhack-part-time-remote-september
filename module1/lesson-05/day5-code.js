// Create an object "student" that represents you
// Give it for properties firstName, lastName, age, city, drinkCoffee, likeDogs, likeCats, favoriteFood, favoriteBook

let student = {
    firstName: 'Paul',
    lastName: 'Fresnel',
    age: 26,
    city: 'Madrid',
    drinkCoffee:true,
    likeDogs:true,
    likeCats:true,
    favoriteFood: 'scallop milanese',
    favoriteBook: 'Rich Dad, Poor Dad'
}

// console.log(student.firstName);
// console.log(student['lastName']);

for (const information in student) {
    console.log(`${student[information]}`);
  }

let secondStudent = {
    firstName: "Anil",
    lastName: "Ozsoy",
    age: 36,
    city: "Dusseldorf",
    drinkCoffee: true,
    likeDogs: true,
    likeCats: true,
    favoriteFood: "Pizza",
    favoriteBook: "Atomic Habits",
  };

  for(const keys in secondStudent){
    if(secondStudent[keys] === "Dusseldorf"){
        console.log('Favorite german city!')
    }
  }

  let thirdStudent = {
    firstName: 'Humberto',
   lastName: 'Vallejo',
   age: 30,
   city: 'San Sebastian',
   drinkCoffee: true,
   likeDogs: true,
   likeCats: true,
   favoriteFood: 'pesto pasta',
   favoriteBook: 'El Aleph' 
};

let fourthStudent = {
    firstName: 'Alfie',
    lastName: 'Collins',
    age: 29,
    city: 'London',
    drinkCoffee: true,
    likeDogs: true,
    likeCats: true,
    favouriteFood: 'curry',
    favouriteBook: 'Godel, Escher, Bach'
}

let fiveStudent ={ 
    firstName: 'Axel', 
    lastName: 'Clemente', 
    age:34, 
    city: 'Mallorca', 
    drinkCoffee: true, 
    likeDogs: true, 
    likeCats: true, 
    favoriteFood: 'pasta', 
    favoriteBook: 'rich dad & poor dad'
}

let sixthStudent= {
    firstName: "Arcadio", 
    lastName: "Reyes", 
    age: 37, 
    city: "Paris", 
    drinkCoffee: true, 
    likeDogs: true, 
    likeCats: false, 
    favoriteFood: "pizza", 
    favoriteBook: "Farenheit 451"
}


const classroom = [student, secondStudent, thirdStudent, fourthStudent, fiveStudent, sixthStudent]    
// console.log(classroom)
// console.log('class size', classroom.length)
// console.log(classroom[2])


// Class Loop Example
// for(let i = 0; i < classroom.length; i++){

//     if(classroom[i].drinkCoffee === true){
//         console.log(`${classroom[i].firstName} likes coffee`)
//     }
//     else {
//         console.log(`${classroom[i].firstName} does not like coffee`)
//     }
    
// }
// for(let i = 0; i < classroom.length; i++){

//     if(classroom[i].likeDogs === true){
//         console.log(`${classroom[i].firstName} likes dogs`)
//     }
//     else {
//         console.log(`${classroom[i].firstName} does not like dogs`)
//     }
    
// }

// Write a program that emails Cat lovers about cat food

// Go through the lists of users
//  for(){}
// Check which users like cats
// if(){
    // Email those users
//     sendEmail()

// }

// for(let i = 0; i < classroom.length; i++){
//     if(classroom[i].likeCats === true){
//         console.log(`${classroom[i].firstName} likes cats`)
//     }
//     else {
//         console.log(`${classroom[i].firstName} does not like cats`)
//     }
// }

// Class Reverse Loop Example
// for(let i = classroom.length - 1; i >= 0; i--){
//     console.log(classroom[i].firstName)
// }
// Fizzbuzz Example 


// Class Loop Coffee Drinkers Example
// Coffeee drinkers example
// Dog lovers example
// Cat lovers example


for(let i = 0; i < classroom.length; i++){
    if(classroom[i].age >= 35){
        console.log(`${classroom[i].firstName} is in their late thirties`)
      }
    else if(classroom[i].age >= 30 && classroom[i].age < 35){
        console.log(`${classroom[i].firstName} is in their early thirties`)
    }
    else if(classroom[i].age >= 25 && classroom[i].age < 30){
        console.log(`${classroom[i].firstName} is in their mid-twenties`)
      }
    else if(classroom[i].age >= 20 && classroom[i].age < 25){
        console.log(`${classroom[i].firstName} is in their early twenties`)
    }
    else{
        console.log('Young and carefree');
    }
}

const expr = 'Papayas';

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $2.79 a pound.');
    break;
  case 'Papayas':
    console.log('Papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

const isMarried = false;
const evaluateExpr = isMarried ? 'Happy' : 'Still happy just single';
console.log(evaluateExpr)

// if(isMarried){
//     return 'Happy'
// }
// else {
//     return 'Still happy just single'
// }

// Wrong approach
// for(let i = 0; i < classroom.length; i++){
//     if(classroom[i].age > 20){
//         console.log(`${classroom[i].firstName} is more than 20`)
//     }
//     else if(classroom[i].age > 25){
//         console.log(`${classroom[i].firstName} is in their mid-twenties`)
//       }
//       else if(classroom[i].age > 30){
//         console.log(`${classroom[i].firstName} is in their early thirties`)
//     }
//     else if(classroom[i].age > 35){
//         console.log(`${classroom[i].firstName} is in their late thirties`)
//       }
//       else{
//         console.log('Young and carefree');
//       }
//     }