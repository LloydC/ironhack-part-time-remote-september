const message = 'Hello from the global scope!';
 
function sayHelloFromLocalScope() {
  const greeting = 'Hello from functional/local scope!';
  return greeting;
}

for(let i = 0; i < message.length; i++){

//  console.log(testScope)
}

// console.log(testScope); 
// console.log(greeting);

// this keyword

const user = {
  name: 'ana',
  age: 29,
  getOlder: function () {
    setTimeout(() => {
      console.log(this)
      // console.log(this);
      // console.log(this.name);
    }, 1000)
  }
};
 
// user.getOlder();

let a = 1;
let b = 2;
 
function inner() {
  a = 4; // reassigned
  let b = 3; // declared in an inner scope
  // console.log(b)
}

inner();
;// => 4
console.log(b);