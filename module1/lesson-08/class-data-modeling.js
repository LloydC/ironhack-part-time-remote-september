// Person
// name
// age
// city
class Person {
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
    greet() {
        console.log(`My name is ${this.name} and I live in ${this.city}`)
    }
}


// Students
class Student extends Person {
    constructor(name, age, city, grades){
        super(name, age, city);
        this.grades = grades;
    }

    greet(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }

}
const studentOne = new Student('John', 34, 'Cape Town', [8,7,9]);
console.log(studentOne)
studentOne.greet()
// greet(name, age, city){}
// studyJavascript()

// Teacher 
// name
// age
// city
// teachJavascript()

// Teaching Assistant
// name
// age
// city