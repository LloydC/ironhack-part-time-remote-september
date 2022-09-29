// Return an array with all the places with a pool
// Return an array with all the places that cost up to 200 euros per day
const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: 'Private Room',
    pool: true,
    garage: false
  },
  {
    title: 'Private apartment',
    price: 190,
    type: 'Entire Place',
    pool: true,
    garage: true
  },
  {
    title: 'Apartment with awesome views',
    price: 400,
    type: 'Entire Place',
    pool: false,
    garage: false
  },
  {
    title: 'Apartment in la Rambla',
    price: 150,
    type: 'Private Room',
    pool: false,
    garage: true
  },
  {
    title: 'Comfortable place in Barcelona´s center',
    price: 390,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'Room near Sagrada Familia',
    price: 170,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: 'Great house next to Camp Nou',
    price: 140,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'New apartment with 2 beds',
    price: 2000,
    type: 'Entire place',
    pool: false,
    garage: true
  },
  {
    title: 'Awesome Suite',
    price: 230,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: 'Entire place',
    pool: true,
    garage: true
  }
];

const placesWithAPool = places.filter(place => {
  // return place.pool === true;
  return place.pool;
})
console.log('placesWithAPool', placesWithAPool);

const cheapestPlaces = places.filter(place => {
  return place.price < 200;
})
console.log('cheapestPlaces', cheapestPlaces);
// return an array with the first letter of each city’s name capitalized.
// Return an array with cities that have at least 6 characters in their name
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

const capitalizedCities = cities.map(city => {
  // return city[0].toUpperCase() + city.substring(1, city.length);
  // return city[0].toUpperCase() + city.slice(1);
  return `${city[0].toUpperCase()}${city.slice(1)}`
})
console.log('capitalizedCities', capitalizedCities)

const longNameCities = cities.filter(city => city.length >= 6)
console.log('longNameCities', longNameCities)

// Accumulate the sum of numbers of this array
const numbers = [2, 4, 6, 8];

const sum = numbers.reduce((acc, currentVal) => acc + currentVal, 0)
console.log('sum', sum);
// Filter out the numbers that are not even and are greater than 42
const numbersList = [1, 60, 112, 123, 100, 99, 73, 45];

const oddNumbers = numbersList.filter((number) => number % 2 !== 0 && number > 42)
console.log('oddNumbers', oddNumbers)
// Generate the list of people who are old enough to go to a bar in the USA (older than 21)
// Calculate the average age in this array of people
const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 49 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 }
  ];

 const legalDrinkingPeople = people.filter(person => person.age >= 21) 
 console.log('legalDrinkingPeople', legalDrinkingPeople)

 const averageAge = people.reduce((accumulator, nextPerson) => accumulator + nextPerson.age, 0) / people.length
 console.log('averageAge', averageAge)
  //Calculate the average number of calories in the menu
  const menu = [
    { name: 'Carrots', calories: 150 },
    { name: 'Steak', calories: 350 },
    { name: 'Broccoli', calories: 120 },
    { name: 'Chicken', calories: 250 },
    { name: 'Pizza', calories: 520 }
  ];

  const averageCalories = menu.reduce((accumulator, currentValue) => accumulator + currentValue.calories, 0)/ menu.length;
  console.log('averageCalories', averageCalories)

// Given an array of students, return a new array with the student's name and final exam grade
const students = [
    {
      name: 'Tony Parker',
      firstProject: 80,
      secondProject: 75,
      finalExam: 90
    },
    {
      name: 'Marc Barchini',
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: 'Claudia Lopez',
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    },
    {
      name: 'Alvaro Briattore',
      firstProject: 82,
      secondProject: 92,
      finalExam: 70
    },
    {
      name: 'Isabel Ortega',
      firstProject: 90,
      secondProject: 32,
      finalExam: 85
    },
    {
      name: 'Francisco Martinez',
      firstProject: 90,
      secondProject: 55,
      finalExam: 78
    },
    {
      name: 'Jorge Carrillo',
      firstProject: 83,
      secondProject: 77,
      finalExam: 90
    },
    {
      name: 'Miguel López',
      firstProject: 80,
      secondProject: 75,
      finalExam: 75
    },
    {
      name: 'Carolina Perez',
      firstProject: 85,
      secondProject: 72,
      finalExam: 67
    },
    {
      name: 'Ruben Pardo',
      firstProject: 89,
      secondProject: 72,
      finalExam: 65
    }
  ];

  // Generate an array with only even numbers
  const numbersThirdList = [1, 2, 3, 4, 5, 6];