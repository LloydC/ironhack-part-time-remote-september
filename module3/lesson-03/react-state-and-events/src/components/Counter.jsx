import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function Counter() {
    let [count, setCount] = useState(0);
    let [characters, setCharacters] = useState([]);
    
    let [name, setName] = useState("");
    let [weapon, setWeapon] = useState("");
    let [occupation, setOccupation] = useState("");

    useEffect(()=>{
        fetch('https://ih-crud-api.herokuapp.com/characters')
            .then(response => response.json())
            .then(data => {console.log(data);setCharacters(data)})
    }, [])

    const decreaseCount = () => {
        setCount(count--) // count = count - 1
    }

    const increaseCount = () => {
        setCount(count++)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const currentCharacters = [...characters]; // making a copy of the array of characters
        if(name !== '' && weapon !== '' && occupation !== ''){
            axios.post('https://ih-crud-api.herokuapp.com/characters', {name, occupation, weapon})
            .then(response =>{
                console.log(response.data); // {}
                currentCharacters.push(response.data) // adding the new character to the array currentCharacters
                setCharacters(currentCharacters) // updating the state variable 'characters' with the updated array
                setName("")
                setOccupation("")
                setWeapon("")
            } )
        }
        else{
            // logic to render an error message
        }
        
    }

    const updateName = (userInput) => {
        setName(userInput)
    }

    const updateOccupation = (userInput) => {
        setOccupation(userInput)
    }

    const updateWeapon = (userInput) => {
        setWeapon(userInput)
    }
  return (
    <div className="Counter">
      <h2>Counter</h2>

      {/* <input type="text" onChange={(event) => updateName(event.target.value)} />
  */}
      <p>You clicked {count} times</p>
 
      <button onClick={decreaseCount}> - </button>
      <button onClick={increaseCount}> + </button>

      {/* <button onClick={() => setCount((prevCount) => prevCount - 1)}> - </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}> + </button> */}

      <ul>
        {characters.map(character => {
            return <li key={character.id}>{character.name}</li>
        })}
      </ul>

      <form onSubmit={handleSubmit}>
        <input name='name'type='text' onChange={(event) => updateName(event.target.value)} value={name}/>
        <br/>
        <input type="text" name="occupation" onChange={(event) => updateOccupation(event.target.value)} value={occupation}/>
        <br/>
        <input type="text" name="weapon" onChange={(event) => updateWeapon(event.target.value)} value={weapon}/>
        <br/>
        <button type="submit">Add a character</button>
      </form>
    </div>
  );
}
 
export default Counter;