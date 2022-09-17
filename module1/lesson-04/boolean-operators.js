let likeCats = true;
let likeDogs = false;
let drinkCoffee = false;


// What will the boolean value be for each test?

let test1 = likeCats && likeDogs; 
console.log('test1', test1);
let test2 = likeCats || likeDogs;
console.log('test2', test2);
let test3 = !likeDogs && !drinkCoffee;
console.log('test3', test3)
let test4 = likeDogs || drinkCoffee;
console.log('test4', test4)

// What console.log will be printed?

if(likeCats && likeDogs){
    console.log("You amazing human ")
}
else if(likeDogs || drinkCoffee){
    console.log("Awesome dog!")
}
else if(!(likeCats || drinkCoffee)){
    console.log("Cool Cat!")
}
else {
    console.log("Lonely human")
}