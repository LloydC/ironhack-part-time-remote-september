// console.log('JS index file is connected')
// console.log(document.body)
// console.log(document.getElementById('cat'))
let catElement = document.getElementById('cat');

// let h1Elements = document.getElementsByTagName('h1');
// const copyofH1Elements = [...h1Elements]
// copyofH1Elements[0].style.color = 'blue';

let h1Element = document.querySelector('h1');
h1Element.style.color = 'orange';


const mouseElements = document.getElementsByClassName('mouse'); // HTML Collection of 'mouse' classes
const copyOfMouseElements = [...mouseElements] // this will create a shallow copy of mouseElements

// console.log(copyOfMouseElements);

document.body.style = "background-color: antiquewhite;"
document.getElementById('cat').style = "background-color: lightgreen;"

for(let i = 0; i < copyOfMouseElements.length; i++){
    copyOfMouseElements[i].style = 'background-color: orange;'
}

copyOfMouseElements.map(element => element.style = "color: brown; background-color: orange;")

catElement.innerText = "I'm the cat element";

let thirdMouseElement = document.querySelector('#thirdMouse');
thirdMouseElement.style.color = 'blue';

const helloClass = document.getElementsByClassName('hello');
const copyOfHello = [...helloClass]

//console.log(helloClass[0].firstChild); access first child node element
// console.log(helloClass[0].firstChild.nextSibling.nextSibling) access second sibling element

let allDivs = document.querySelectorAll('.mouse, #cat, p');
// console.log(allDivs);

// console.log(document.querySelector('.mouse, .red').classList)

let containerElement = document.getElementById('container') // parent I want to append an element to
let h2Element = document.createElement('h2'); // creates h2 element
h2Element.innerText = "Hello again!"; // create content in my h2 element
h2Element.style.color = 'gray'; // sets the CSS color of the h2 element
containerElement.appendChild(h2Element); // append h2Element to containerElement

const testButton = document.getElementById('testButton'); // target testButton
testButton.onclick = function (){
    console.log('testButton has been clicked')
}
// testButton.setAttribute('onclick', 'test()') // add an onclick event

catElement.addEventListener('click', function(event){
    console.log(event.currentTarget)
    if(event.currentTarget.style.backgroundColor === 'lightgreen'){
        catElement.style.backgroundColor = 'lightblue'
        catElement.innerHTML = 'Im the blue cat element'
    }
    else {
        catElement.style.backgroundColor = 'lightgreen';
        catElement.innerHTML = 'Im the green cat element'
    }
})
// const testInput = document.getElementById('testInput')
// console.log(testInput)
// testInput.addEventListener('change', function(event){
//     console.log(event)
// })

const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
    console.log('test')
    if(e.target.value === 'developer'){
        log.textContent = 'learn how to google'
    }
//   log.textContent = e.target.value;
}

// document.addEventListener('keydown', function(event){
//     if(event.key === 'l'){
//         console.log('l has been pressed')
//     }
//     console.log(event)
// })

function test(){
    // catElement.innerHTML = '<div> Test was successful </div>'
    // catElement.style.color = 'red';
    // catElement.style.fontSize = '20px'
    let title = document.querySelector('h1');// select my title
    console.log(title)
    if(title.className === 'show'){ // check if it's displayed
        title.className = 'hide'; // hide it
    }
    else {
        title.className = 'show'; // display it
    }
}

function renderImage(){
    const imgElement = document.querySelector('img');
    const srcValue = imgElement.getAttribute('src')
    // console.log(srcValue.length);
    if(srcValue.length === 0){
    imgElement.setAttribute('src', 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' )
    imgElement.setAttribute('width', '200px')
    imgElement.setAttribute('height', '200px')
    imgElement.setAttribute('style', 'border-radius: 75%;')
    }
    else {
        imgElement.setAttribute('src', '');
        imgElement.removeAttribute('width')
        imgElement.removeAttribute('height')
        imgElement.removeAttribute('style');
    }
}

function removeTest(){
    const ulElement = document.querySelector('ul'); // targetted the parent element 'ul'
    const liChild = ulElement.lastChild.previousSibling;// targetted the element I wanted to remove
    ulElement.removeChild(liChild); // removed liChild from its parent element
    // ulElement.innerHTML = '<li>Test</li> <li>Test 2 </li>'; // also removes liChild from its parent element
    // console.log(ulElement.lastChild.previousSibling)
}

function removeContent(){
    // target the element
    const thirdLiElement = document.getElementById('thirdMouse');
    // update its content using .innerText
    // thirdLiElement.innerText = '';
}