const fs = require('fs-extra');

// Callback form

// fs.readFile('./test.txt', 'utf8', (err, data)=>{
//     console.log(data)
//     fs.readFile('./test2.txt', 'utf8', (err, secondData)=>{
//         console.log(secondData)
//         fs.readFile('./test3.txt', 'utf8', (err, thirdData)=>{
//             console.log(thirdData)

//         })
//     })
// })

//Promise form

// const firstFile = fs.readFile('./test.txt', "utf-8").then(data => console.log( 'firstFile', data))
// const secondFile = fs.readFile('./test2.txt', "utf-8").then(data => console.log('secondFile', data))
// const thirdFile = fs.readFile('./test3.txt', "utf-8").then(data => console.log('thirdFile', data))


fs.readFile('./test.txt', "utf-8") // 1 --> Pending --> Fulfilled/Rejected
.then(data => console.log(data)) // 2 ---> Fulfilled --> then console.log(data)
.then(() => fs.readFile('./test2.txt', "utf-8")) // 3 --> 
// .then(() => console.log('random test'))
.catch(err => console.log(err))