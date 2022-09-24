// 1. Create a variable "whiteCars" with all the cars with a color "white"
// 2. Create a variable "biggerCars" with only the cars with a capacity bigger then 4
// 3. Create a variable "favoriteCars" with only type "citroen" or "tesla" cars

// 4. Create a new array "electricCars", it should add a property "energy" with an "electric" value for all tesla cars
// 5. Create a new array "regularCars", it should add a property "energy" with a "fuel" value for all cars except tesla cars

// 6. Create a function 'getColoredCars' which has two parameters 'cars' and 'color'
// The function should return all cars that fit the color entered

// 7. Create a function 'getAppropriateCar' which has two parameters for 'cars' and 'capacity'
// The function should return all cars who have at minimum the capacity entered

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