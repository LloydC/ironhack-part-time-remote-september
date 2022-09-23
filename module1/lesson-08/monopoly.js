// Object Literal Approach
let player1 = {
    name: 'Joaquim',
    color: 'red',
    position: 0,
    cash: 1000
  };
   
  let player2 = {
    name: 'Maxence',
    color: 'blue',
    position: 0,
    cash: 1000
  };
   
  let player3 = {
    name: 'Mostafa',
    color: 'black',
    position: 0,
    cash: 1000
  }
  // Class Approach
  class Player {
    // this | Player {}
    // this.name = 'Jesus' | Player { name: 'Jesus'}
    constructor(name, color, position, cash){
        this.name = name;
        this.color = color;
        this.position = position;
        this.cash = cash;
    }

    updateName(name){
        return this.name = name;
    }

    getName(){
        return this.name;
    }

  }

  const playerOne = new Player('Joaquim', 'red', 0, 1000);
  const playerTwo = new Player('Maxence', 'blue', 0, 1000);
  const playerThree = new Player('Mostafa', 'black', 0, 1000);

//   console.log(playerOne)
//   console.log(playerTwo)
//   console.log(playerThree)
  playerOne.updateName('Jesus');
  playerTwo.updateName('Maxime');
  console.log(playerOne.getName())
  console.log(playerThree.getName())
//   console.log(playerOne)
//   console.log(playerTwo)