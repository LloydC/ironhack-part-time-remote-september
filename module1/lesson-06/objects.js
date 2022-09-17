const firstVegetable = {
    name: 'Aubergine',
    color: 'purple',
    score: 2,
    price: 0.75,
    quantity: 30
}

const secondVegetable = {
    name: 'Leek',
    color: 'Green',
    score: 3,
    price: 1,
    quantity: 25
}

const thirdVegetable = {
    name: 'Carrot',
    color: 'orange',
    score: 5,
    price: 0.2,
    quantity: 40
}

const vegetables = [firstVegetable, secondVegetable, thirdVegetable];

// Create three different fruits as objects with properties name, color and reviews
const firstFruit = {
    name: 'apple',
    color: 'green',
    score: 4,
    reviews: ["the most delicious apples", "Best shop for apples", "Had worms, won't go there again"],
    price: 1.5,
    quantity: 20
}

firstFruit.dimensions = {
    width: 2,
    height: 4
}

firstFruit.isPopular = false;
// firstFruit.height = 4;
// firstFruit.width = 2;

// console.log(firstFruit)

const secondFruit = {
    name: 'banana',
    color: 'yellow',
    score: 4.5,
    reviews: ["Best bananas", "Overripe sometimes but good"],
    price: 0.6,
    quantity: 30

}
secondFruit.isPopular = true;

const thirdFruit = {
    name: 'mango',
    color: 'green',
    score: 5,
    reviews: ["Most exotic and delicious fruit available at the shop", "I love their mangoes"],
    price: 3.5,
    quantity: 50
}

thirdFruit.isPopular = true;

// const firstReview = {
//     writerName: 'James',
//     description: 'Awesome shop',
//     date: '17th September 2022'

// }
// Add them to an array fruits

const fruits = [firstFruit, secondFruit, thirdFruit];

const fourthFruit = {
    name: 'kiwi',
    color: 'brown',
    score: 4,
    reviews: ["Awesome kiwis"],
    price: 0.5,
    quantity: 70
}

const fifthFruit = {
    name: 'Pineapple',
    color: 'yellow',
    score: 4.5,
    reviews: ["Delicious and nutritious pineapples"],
    price: 4,
    quantity: 45
}

fruits.push(fourthFruit);
fruits.unshift(fifthFruit);
const removedFruit = fruits.splice(2,1)
fruits.pop();
//console.log(removedFruit)
// console.log(fruits);
// fruits.forEach(function(fruit, index){
//     console.log(`${fruit.name} is at index position ${index}`)
// })
// sayHi();
// sayHi();
// sayHi();
fruits.forEach((fruit, index) => console.log(`${fruit.name} is at index position ${index}`))


// function sayHi(){
//     console.log('Hi class')
//     console.log('Welcome to your first class about functions :)')
// }


function printStars(numberOfRepeats) {
    console.log('*'.repeat(numberOfRepeats));
}

printStars(3)
printStars(5)
// Get the exact number of fruits in the shop

// Access first fruit and access the value of property quantity
// Add the value of quantity to a variable
// Access second fruit and access the value of property quantity
// Add the value of secondFruit quantity to the same variable
// Access third fruit and access the value of property quantity
// Add the value of thirdFruit quantity to the same variable

function getTotalQuantity(productList){
    let totalQuantity= 0;

    for(let i = 0; i < productList.length; i++){
       totalQuantity+= productList[i].quantity 
    }
    console.log('The total quantity is '+ totalQuantity);
    return totalQuantity;
}

getTotalQuantity(fruits);
getTotalQuantity(vegetables);

    
    // console.log('Total number of fruit is ' + totalFruits)

    // Get the average score for all the fruits

    // Access the score of each fruit using a for loop
    // Add the value of score to a variable 'totalScore' which is initially 0
    // console.log 'averageScore' by dividing it by fruits.length

    function getAverageScore(productList){ // function declaration
        let totalScore = 0;
        for(let i = 0; i < productList.length; i++){
            totalScore += productList[i].score
        }
        return totalScore/productList.length;
    }

    console.log(getAverageScore(fruits)); // function execution
    console.log(getAverageScore(vegetables));
    
    // console.log('The average score is ' + totalScore/fruits.length);









// for(let i = 0; i < fruits.length; i++){
//     console.log('Fruit name is ',fruits[i].name)
//     for(let j= 0; j < fruits[i].reviews.length; j++){
//         console.log( `Review at index ${j} is`,fruits[i].reviews[j])
//     }  
// }

// let i = 0;

// while(i < fruits.length){
//     console.log(fruits[i].name);
//     console.log(fruits[i].score)
//     i++;
// }

let phrase = "This is long enough for a string to count it words";

let words = phrase.split(" ");

console.log(words);


function addTwoNumbers(first, second){
    let sum = first + second;
    if( sum > 100){
        return `${sum} is greater than 100`;
    }

    return `${sum} is less than 100`;  

}

console.log(addTwoNumbers(76,22));
console.log(addTwoNumbers(8798,8939));

const numbers = [9, 7474, 23,958]

function numbersSum(numbersList){
    let sum = 0;
    // Access each number in the "numbers" array
    for(let i =0; i < numbersList.length; i++){
       sum = sum + numbersList[i]
    }
    console.log('sum: ',sum)
    return sum;
    // Add them to a variable so I can get the sum
}
numbersSum(numbers)

function sumTest(array) {
    if (!array.length) return 'not an array or a string';

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
}

  console.log(sumTest(2))