let currentGame;
let currentCar;

let obstaclesFrequency = 0; // support the logic for generating obstacles

let background = new Image();
background.src = "./images/road.png";

document.getElementById('game-board').style.display = 'none';

const myCanvas = document.getElementById('canvas');
const ctx = myCanvas.getContext('2d');

function startGame() {
  document.getElementById('game-board').style.display = 'block';

  currentGame = new Game();
  ctx.drawImage(background, 0, 0, myCanvas.width, myCanvas.height); // draw background image
  //Instantiate a new car
  currentCar = new Car();
  currentGame.car = currentCar;
  currentGame.car.drawCar();
  updateCanvas(); // keeping track of the updates as the game unfolds
}

function updateCanvas() {
  ctx.clearRect(0, 0, 500, 700); // clear canvas
  ctx.drawImage(background, 0, 0, myCanvas.width, myCanvas.height); // redraw the background
  currentGame.car.drawCar(); // redraw the car at its current position
  obstaclesFrequency++;

  if (obstaclesFrequency % 100 === 1) {
      //Draw an obstacle
      let randomObstacleX = Math.floor(Math.random() * 450);
      let randomObstacleY = 0;
      let randomObstacleWidth = Math.floor(Math.random() * 50) + 20;
      let randomObstacleHeight = Math.floor(Math.random() * 50) + 20;
      let newObstacle = new Obstacle(
          randomObstacleX, 
          randomObstacleY, 
          randomObstacleWidth, 
          randomObstacleHeight);

      currentGame.obstacles.push(newObstacle);
  }

  for(let i = 0; i<currentGame.obstacles.length; i++) {
      currentGame.obstacles[i].y += 1; // increases the obstacle y
      currentGame.obstacles[i].drawObstacle();

      if (detectCollision(currentGame.obstacles[i])) {
          alert('BOOOOOMM!')
          obstaclesFrequency = 0;
          currentGame.score = 0;
          document.getElementById('score').innerHTML = 0;
          currentGame.obstacles = [];
          document.getElementById('game-board').style.display = 'none';
      }

      // Logic for player successfully not colliding with obstacles
      if (currentGame.obstacles.length > 0 && currentGame.obstacles[i].y >= 600) {
          currentGame.obstacles.splice(i, 1); // remove that obstacle from the array
          currentGame.score++; // increase score by 1
          document.getElementById('score').innerHTML = currentGame.score; // update the screen
      }
  }

  requestAnimationFrame(updateCanvas);
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  document.onkeydown = (e) => {
    let whereToGo = e.keyCode;
    currentGame.car.moveCar(whereToGo);
}
};



function detectCollision(obstacle) {
  return !((currentCar.y > obstacle.y + obstacle.height) || 
  (currentCar.x + currentCar.width < obstacle.x) || 
  (currentCar.x - currentCar.width  > obstacle.x + obstacle.width))
}