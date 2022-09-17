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

let empty = ''

for(let i = 0; i < student.firstName.length; i++){
    if(student.firstName[i] !== 'P' && student.firstName[i] !== 'l' ){
        empty += student.firstName[i] 
        empty += student.lastName[i] 
    }
}
console.log(empty)