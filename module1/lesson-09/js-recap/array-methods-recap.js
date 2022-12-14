let cars = [
  {
    color: "white",
    type: "minivan",
    registration: new Date('2017-01-03'),
    capacity: 7
  },
  {
      color: "red",
      type: "audi",
      registration: new Date('2018-10-08'),
      capacity: 4
    },
    {
      color: "black",
      type: "minivan",
      registration: new Date('2017-02-11'),
      capacity: 8
    },
    {
      color: "grey",
      type: "audi",
      registration: new Date('2019-11-09'),
      capacity: 4
    },
    {
      color: "white",
      type: "tesla",
      registration: new Date('2021-05-05'),
      capacity: 4
    },
    {
        color: "blue",
        type: "citroen",
        registration: new Date('2020-12-01'),
        capacity: 4
      },
      {
        color: "black",
        type: "tesla",
        registration: new Date('2021-08-21'),
        capacity: 4
      },
      {
        color: "grey",
        type: "citroen",
        registration: new Date('2012-12-19'),
        capacity: 4
      }
]
const highCapacityCars = cars.filter(car => car.capacity > 4);
console.log(cars.length)
console.log(highCapacityCars.length)

// 1. Create a variable "whiteCars" with all the cars with a color "white"

const whiteCars = [];

for(let i = 0; i < cars.length; i++){
  // check the cars color 
  // if "white" add it to "whiteCars"
  if(cars[i].color === "white"){
    whiteCars.push(cars[i])
  }
}
// console.log('whiteCars', whiteCars);
// 2. Create a variable "biggerCars" with only the cars with a capacity bigger then 4
const biggerCars = [];

for(let i = 0; i < cars.length; i++){
  // if capacity > 4 then push to biggerCars
  if(cars[i].capacity > 4){
    biggerCars.push(cars[i])
  }
}

console.log('biggerCars', biggerCars);

// 3. Create a variable "favoriteCars" with only type "citroen" or "tesla" cars
const favoriteCars = []

for(let i = 0; i < cars.length; i++){
  if(cars[i].type === "citroen" || cars[i].type === "tesla" ){
    favoriteCars.push(cars[i])
  }
}

console.log('favoriteCars', favoriteCars);
// 4. Create a new array "electricCars", it should add a property "energy" with an "electric" value for all tesla cars
const electricCars = []

for(let i = 0; i < cars.length; i++){
  if(cars[i].type === "tesla"){
    cars[i].energy = "electric"; 
    electricCars.push(cars[i])
  }
}

console.log('electricCars', electricCars);
// 5. Create a new array "regularCars", it should add a property "energy" with a "fuel" value for all cars except tesla cars
const regularCars = []

for(let i = 0; i < cars.length; i++){
  if(cars[i].type !== "tesla"){
    cars[i].energy = "fuel";
    regularCars.push(cars[i]);
  }
}

console.log('regularCars', regularCars);
// 6. Create a function 'getColoredCars' which has two parameters 'cars' and 'color'

function getColoredCars(cars, color){
// The function should return all cars that fit the color entered
  const coloredCars = [];

  for(let i = 0; i < cars.length; i++){
    if(cars[i].color === color){
      coloredCars.push(cars[i]);
    }
  }
  return coloredCars;
}
const redCars = getColoredCars(cars, "red");
const blackCars = getColoredCars(cars, "black");

// console.log('redCars', redCars);
console.log('blackCars', blackCars);
// 7. Create a function 'getAppropriateCar' which has two parameters for 'cars' and 'capacity'
// function getAppropriateCar(cars, capacity){
// // The function should return all cars who have at minimum the capacity entered
//   const pickCapacity = []

//   for(let i = 0; i < cars.length; i++){
//     if(cars[i].capacity >= capacity){
//       pickCapacity.push(cars[i]);
//     }
//   }

//   return pickCapacity;
// }

function getAppropriateCar(cars, capacity){
  return cars.filter(car => car.capacity >= capacity);
  // return cars.filter(function(car){
  //   return car.capacity >= capacity;
  // })
}

const fiveSeatsCapacity = getAppropriateCar(cars, 5);
const eightSeatsCapacity = getAppropriateCar(cars, 8)
console.log('fiveSeatsCapacity', fiveSeatsCapacity);
console.log('eightSeatsCapacity', eightSeatsCapacity);