const numbersList = [1, 60, 112, 123, 100, 99, 73, 45, -45,-20];

// const sortArray = numbersList.sort(function(a, b) {
//     if (a < b) return -1; // a is less than b
//     if (a > b) return 1; // a is greater than b
//     if (a === b) return 0; // a equals b
//   })

// const sortArray = numbersList.sort((a, b) => b - a); sort numbers in the descending order
const sortArray = numbersList.sort((a, b) => a - b); // sort numbers in ascending order
  console.log('sortArray', sortArray)
const oddNumbersSorted = sortArray.filter(number => number %2 !== 0);
const evenNumbersSorted = sortArray.filter(number => number %2 === 0);
console.log('oddNumbersSorted', oddNumbersSorted)
console.log('evenNumbersSorted', evenNumbersSorted)

const words = ['Hello', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third'];

// const sortedWords = words.sort(function (a, b) {
//     if (a.length < b.length) return 1; //  1 here (instead of -1 for ASC)
//     if (a.length > b.length) return -1; // -1 here (instead of  1 for ASC)
//     if (a.length === b.length) return 0;
//   });
const sortedWordsASC = words.sort((a, b) => a.length - b.length) // Order words in ASCENDING order

console.log('sortedWordsASC', sortedWordsASC);
console.log('sortedWordsDESC', sortedWordsASC.reverse());

