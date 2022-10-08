 const canvas = document.getElementById('example'); // target the canvas 
 const ctx = canvas.getContext('2d'); // set a 2d context

// let i = 0
// Small animation example
// const intervalId = setInterval( draw, 7000);

// conditional statement

// function draw (){
//     console.log(i)
//     if(i > 4) {
//         clearInterval(intervalId);
//     }
    
//     setTimeout(()=>{
//         ctx.fillStyle = 'green';
//         ctx.fillRect(0, 0, 30, 30);
//     }, 1000)
    
//     setTimeout(()=>{
//         ctx.fillStyle = 'red';
//         ctx.fillRect(60, 60, 30, 30);
//     }, 2000)
    
//     setTimeout(()=>{
//         ctx.fillStyle = 'purple';
//         ctx.fillRect(120, 120, 30, 30);
//     }, 3000)
    
//     setTimeout(()=>{
//         ctx.clearRect(120, 120, 30, 30);
//     }, 4000)
    
//     setTimeout(()=>{
//         ctx.clearRect(60, 60, 30, 30);
//     }, 5000)
    
//     setTimeout(()=>{
//         ctx.clearRect(0, 0, 30, 30);
//     }, 6000)
    
//     i++;
// }


// ctx.fillStyle = 'green';
// ctx.fillRect(0, 0, 30, 30);

// ctx.fillStyle = 'red';
// ctx.strokeRect(30, 30, 30, 30);


// ctx.beginPath(); // start the path

// ctx.moveTo(50, 50); // starting position is x=50, y=50
// ctx.lineTo(250, 50); // draw the line that has final coordinates x=250, y=50
// ctx.stroke(); // .stroke() executes the drawing
 
// ctx.moveTo(250, 50); // start a new line from these coordinates: x=250, y=50
// ctx.lineTo(250, 100); // draw the line that has final coordinates x=250, y=100
// ctx.stroke() // executes the drawing
// // ctx.fill();
// ctx.moveTo(250, 100)
// ctx.lineTo(200, 100)
// ctx.stroke()

// ctx.closePath(); // close the path

// ctx.beginPath();
// ctx.arc(150, 170, 75, 0, Math.PI * 2); // ctx.arc(x, y, radius, startAngle, endAngle)
// ctx.fillStyle = 'orange';
// //ctx.fill();
// ctx.lineWidth = 5;
// ctx.lineCap = 'square';
// ctx.strokeStyle = 'rgba(0, 255, 0, 1)'; // !
// ctx.stroke();
// ctx.closePath();

// ctx.font = '48px serif';
// ctx.fillStyle = 'purple';
// ctx.fillText('Hello world', 10, 50);


// ctx.beginPath();
// ctx.arc(150, 170, 35, 0, Math.PI * 2);
// ctx.fillStyle = 'red'; // !
// // fills the inner circle with red color
// ctx.fill();
// ctx.closePath();


// RECTANGLES Example
//fillRect(x, y, width, height);
// ctx.fillStyle = 'green';
// ctx.fillRect(20, 10, 100, 100);
//ctx.clearRect(20, 10, 60, 60);

// ctx.fillStyle = 'blue';
// ctx.fillRect(20, 10, 25, 25);

// // color the text
// ctx.fillStyle = 'orange';
// ctx.font = '20px Times New Roman';
// 
// // is going to appear
// ctx.fillText('Hello there', 20, 40); // ctx.fillText("string", x, y); => x, y are coordinates where the text

//IMAGES Example


const fireballImg = new Image(); // creating an image element
fireballImg.src = './images/pixel-fireball.png';// "src" has to point as the image is used in HTML file

// // // set the start position of our image

let fireballX = 300; // 297
let fireballY = 300; // 297

function draw(x, y) { // drawing the fireball
 
  const theCanvas = document.getElementById('example');  // use id "example" to get <canvas></canvas> tag
  const ctx = theCanvas.getContext('2d'); // capture 2d context where everything happens in canvas, context has all the methods for drawing things

  ctx.clearRect(0, 0, 600, 600); // clears whole canvas to simulate animation (==movement) of the rectangle
  ctx.drawImage(fireballImg, fireballX, fireballY, 50, 50); // ctx.drawImage(whichImage, x, y, width, height);

  fireballX -= 3; // fireballX = 297; ---> changes position of X coordinate
  fireballY -= 3; // fireballY = 297 
    console.log(fireballX)
  if(fireballX < 0){
    fireballX = 300;
    fireballY = 300;
  }
}

setInterval(() => { draw(fireballX,fireballY)}, 100)