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

    greet(){
        console.log('Good morning!')
    }

    goSleep(){
        console.log('TIme to go to bed!')
    }

    sayGoodBye(){
        console.log('Goodbye')
    }
}

let person1 = new Person('Jasmine', 34, 'Dublin'); // Instance of the class Person

// person1.greet(); //
// person1.goSleep();
// console.log(person1);
// Teacher {}
class Teacher extends Person {
    constructor(name, age, city, programmingLanguages){
        super(name, age, city);

        this.programmingLanguages = programmingLanguages;
    }

    greet(message){
        console.log(message)
    }

    doTeaching(){
        console.log("Let's code away");
    }
}

let teacher1 = new Teacher('Lloyd', 32, 'Amsterdam', ['Javascript', 'Ruby']);

console.log(teacher1);

teacher1.greet("Good morning class!");

teacher1.doTeaching()

// teacher1.sayGoodBye();

// Teaching Assistant {}
// name
// age
// city

class TeachingAssistant extends Teacher {
    constructor(name, age, city, programmingLanguages){
        super(name, age, city, programmingLanguages);
    }
}

let TeachingAssistant1 = new TeachingAssistant("Joshua", 36, 'Madrid', ['Javascript'])
TeachingAssistant1.greet("Hey guys, awesome work so far!")
console.log(TeachingAssistant1);
// Students {}
// name
// age
// city

