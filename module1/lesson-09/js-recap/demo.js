const array1 = [1, 4, 9, 16];
const array2 = ["Alfie", "Arcadio", "Axel", "Humberto"]

const newArray = array1.map(function(x){
    return x*2;
})

const secondNewArray = array2.map(function(name){
    if(name.includes("A")){
        return 'Mr. ' + name;
    }
    return '';
})

const thirdNewArray = secondNewArray.filter(function(name){
    return name !== '';
})

const fourthArray = []
for(let i = 0; i < secondNewArray.length; i++){
    if(secondNewArray[i] !== ''){
        fourthArray.push(secondNewArray[i])
    }
}


console.log(newArray);
console.log(secondNewArray);
console.log(thirdNewArray);
console.log(fourthArray)