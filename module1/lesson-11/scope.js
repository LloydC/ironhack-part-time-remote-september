const message = 'Hello from the global scope!';
 
function sayHelloFromLocalScope() {
  const greeting = 'Hello from functional/local scope!';
  return greeting;
}
 
console.log(message); 
console.log(greeting);