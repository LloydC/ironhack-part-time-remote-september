// Get all cities to Uppercase
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

const uppercaseCities = []
for(let i = 0; i < cities.length; i++){
    // console.log(cities[i].toUpperCase())
    uppercaseCities.push(cities[i].toUpperCase());
}
console.log('uppercaseCities', uppercaseCities);

const otherUppercaseCities = cities.map(city => {
    return city.toUpperCase();
})
console.log('otherUppercaseCities', otherUppercaseCities)

// Return a list of students that are younger than 19
const students = [
  { name: "Bob", age: 17 },
  { name: "Susy", age: 18 },
  { name: "Ted", age: 18 },
  { name: "Sarah", age: 20 },
  { name: "Bill", age: 19 }
];

const youngStudents = [];
for(let i = 0; i < students.length; i++){
    if(students[i].age < 19){
        youngStudents.push(students[i])
    }
}

console.log('youngStudents:', youngStudents);

const anotherYoungStudents = students.filter(student => {
    return student.age < 19;
})

console.log('anotherYoungStudents', anotherYoungStudents);

// Return a list of places with a pool
// Return a list of places with a pool and a garage
// Return a list of places with neither pool or garage
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

  const placesWithPool = places.filter(place => {
    return place.pool === true;
  })

  const placesWithPoolTitle = placesWithPool.map(place => {
    return {title: place.title};
  })

  console.log('placesWithPoolTitle', placesWithPoolTitle);

  const placesWithPoolAndGarage = places.filter(place => {
    return place.pool === true && place.garage === true;
  })

  console.log('placesWithPoolAndGarage', placesWithPoolAndGarage);