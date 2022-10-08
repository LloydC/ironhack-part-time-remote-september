// const canvas = document.querySelector('#example');
// const ctx = canvas.getContext('2d');


// 4 steps
//
// 1. Save Canvas state
// 2. Clear canvas
// 3. Draw animated shapes
// 4. Restore Canvas state

// ctx.fillStyle = "orange";
// ctx.save(); // save the fillStyle "orange"

// ctx.fillStyle = "green";
// ctx.fillRect(10, 10, 100, 100);

// ctx.fillRect(30,20,30,20)

// ctx.fillStyle = 'red'
// ctx.fillRect(60,80,30,20)
// // Restore the default state
// ctx.restore(); // resetting fillStyle "orange"
// ctx.fillRect(150, 40, 100, 100);
// MULTIPLE SQUARES EXAMPLE

// const cWidth = canvas.width; // 700
// const cHeight = canvas.height; // 450

// function drawCanvas(x, y, w, h, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, w, h);
// }


// // const stack =  []
// ctx.save();
// drawCanvas(10, 20, 30, 30, 'turquoise'); // First state
// drawCanvas(50, 70, 30, 30, 'orangeRed');
 // saving the first state 

// // const stack =  [First State]
//  // Second state
// ctx.save();
// // const stack = [First State, Second State]
// drawCanvas(120, 150, 30, 30, 'magenta');

// ctx.restore(); // regenerate the state which is at the top of the stack

// drawCanvas(200, 70, 30, 30);
// ctx.save(); // => this would give us back orangeRed
// ctx.restore();

// drawCanvas(250, 20, 30, 30);



// RANDOM SQUARE COLORS EXAMPLE

// const color = {
//     red: Math.floor(Math.random() * 255),
//     green: Math.floor(Math.random() * 255),
//     blue: Math.floor(Math.random() * 255),
//     rgb: function () {
//       return `rgb(${this.red}, ${this.green}, ${this.blue})`;
//     }
//   };
   
//   function updateCanvas() {
//     color.red = (color.red + 1) % 255;
//     color.blue = (color.blue + 1) % 255;
//     color.green = (color.green + 1) % 255;
   
//     ctx.clearRect(0, 0, 480, 270);
//     ctx.fillStyle = color.rgb();
//     ctx.fillRect(0, 0, 150, 150);
   
//     requestAnimationFrame(updateCanvas);
//   }
   
//   updateCanvas();

// FALLING SQUARES EXAMPLE

// ctx.fillStyle = '#FF0000';
 
// // let initialValue = 0;
// let speed1 = 0;
// let speed2 = 0;
// let speed3 = 0;

// function clearCanvas() {
//     ctx.clearRect(0, 0, 700, 450); // 700 and 450 are canvas width and height
// }

// function drawCanvas(x, y, w, h, color) {
//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, w, h);
// }

//   function updateCanvas() {
//     // in order to see animation, let's change speed1,2 and 3 on every call
//     speed1 += 1;
//     speed2 += 2;
//     speed3 += 3;
   
//     // clear the canvas
//     clearCanvas();
   
//     // redraw the canvas
//     drawCanvas(speed1, 50, 50, 50, 'red');
//     drawCanvas(speed2, 150, 50, 50, 'green');
//     drawCanvas(speed3, 250, 50, 50, 'yellow');
    
//     if(speed1 >= canvas.width && speed3 >= canvas.width && speed2 >= canvas.width){
//         speed1 = 0;
//         speed2 = 0;
//         speed3 = 0;
//     }
//     requestAnimationFrame(updateCanvas);
//     // setInterval(updateCanvas, 400)
//   }
   
//   updateCanvas();


// MOVING GHOST EXAMPLE

// ctx.fillStyle = 'white';
// ctx.font = '18px serif';

// class Ghost {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
   
     
//       const img = new Image(); // Load the image
//       img.src = 'https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif'; // defining the src of the image
//       img.addEventListener('load', () => {
//         // Once image loaded => draw
//         this.img = img; // add a property this.img and assign it the loaded image
//         this.draw(); // draw the image on the canvas
//       });
      
//     }
//     moveUp() {
//       this.y -= 25; // this.y = this.y = 25
//     }
//     moveDown() {
//       this.y += 25; // this.y = this.y + 25
//     }
//     moveLeft() {
//       this.x -= 25; // this.x = this.x - 25
//     }
//     moveRight() {
//       this.x += 25; // this.x = this.x + 25
//     }
//     draw() {
//       ctx.drawImage(this.img, this.x, this.y, 50, 50);
//     }
//   }

//   function updateCanvas() {
//     ctx.clearRect(0, 0, 1500, 1700);
//     // ctx.fillText('Ghost_x: ' + ghost.x, 580, 40);
//     // ctx.fillText('Ghost_y: ' + ghost.y, 580, 60);
//     ghost.draw(); // draw ghost at its new position
//   }
   
//   let initialX = 200;
//   let initialY = 10;

//   const ghost = new Ghost(initialX, initialY);
//   // const ghost2 = new Ghost(100, 80);
//   // console.log(ghost)

//   document.addEventListener('keydown', (e) => {
//     console.log(e)
//     switch (e.keyCode) {
//       case 32:
//         ghost.x = initialX;
//         ghost.y = initialY;
//         break;
//       case 38: // pressed the up arrow key on my keyboard
//         ghost.moveUp();
//         console.log('up', ghost);
//         break;
//       case 40:// pressed the down arrow key on my keyboard
//         ghost.moveDown();
//         console.log('down', ghost);
//         break;
//       case 37: // pressed the left arrow key on my keyboard
//         ghost.moveLeft();
//         console.log('left', ghost);
//         break;
//       case 39: // pressed the right arrow key on my keyboard
//         ghost.moveRight();
//         console.log('right', ghost);
//         break;
//     }
//     updateCanvas(); // clear canvas and redraw ghost
//   });

  // HORIZONTAL BACKGROUND MOVEMENT

// const img = new Image();
// img.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png';

// const backgroundImage = {
//   img: img,
//   x: 0, // where do we position our image on the x axis
//   speed: -1,

//   move: function() {
//     this.x += this.speed; // -1 decrements on the x axis by 1
//     this.x %= canvas.width; // 500 this.x = this.x % canvas.width
//   },

//   draw: function() {
//     ctx.drawImage(this.img, this.x, 0);
//     ctx.drawImage(this.img, this.x + canvas.width, 0);

//   },
// };

// function updateCanvas() {
//   backgroundImage.move(); // move the background

//   ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing Canvas
//   backgroundImage.draw(); // redraw the image

//   requestAnimationFrame(updateCanvas);
// }

// // start calling updateCanvas once the image is loaded
// img.onload = updateCanvas;


// /vertical BACKGROUND MOVEMENT

const img = new Image();
 img.src = 'https://png.pngtree.com/element_our/md/20180321/md_d76401cff8291e4834a4754df44cb637.jpg';
//img.src = 'http://guidohenkel.com/wp-content/uploads/2018/05/image8.jpg';
// img.src = 'https://www.gamedevelopment.blog/wp-content/uploads/2019/01/spacebg.jpg';
//img.src = 'https://image.freepik.com/free-vector/seamless-colorful-space-pattern-background-from-planets-rockets-stars_3119-189.jpg';

let canvas, ctx, mainCanvas, mainCtx;

img.onload = function() {
  // Create background canvas
  backgroundCanvas = document.querySelector('#example');
  ctx = backgroundCanvas.getContext('2d');
  
  // Create main canvas
  mainCanvas = document.getElementById('example');
  mainCtx = mainCanvas.getContext('2d');
  
  // start calling updateCanvas once the image is loaded
  updateBackgroundCanvas()
};




const backgroundImage = {
  img: img,
  x: 0,
  y:0, // 450
  speed: -1,

  move: function() {
 
    this.y += this.speed; // controls the vertical movement
    this.y %= backgroundCanvas.height; // this.y = this.y/450
  },

  draw: function() {
    ctx.drawImage(this.img, 0, this.y);
    if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.y + this.img.height);
    } else {
      ctx.drawImage(this.img, 0, this.y - backgroundCanvas.height);
    }
  },
};

// function renderMainCanvas() {
//   mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
//   mainCtx.fillStyle = "black";
//   mainCtx.font = "50px monospace";
//   mainCtx.fillText('Ironhackers', 100, 200);
// }

function updateBackgroundCanvas() {
  backgroundImage.move();
  mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
  mainCtx.fillStyle = "black";
  mainCtx.font = "50px monospace";
  mainCtx.fillText('Ironhackers', 100, 200);
  ctx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
  backgroundImage.draw();
  
  requestAnimationFrame(updateBackgroundCanvas);
}