import React, { useState, useEffect } from "react";
 
function Counter() {
  const [count, setCount] = useState(0); // step 1: declare state variables

  useEffect(()=>{ // step 3: execute the useEffect
    console.log('hi')
    // const countParagraph = document.getElementsByClassName('count')[0];
    // if(count % 2 === 0){
    //     countParagraph.classList.toggle('even')
    // }
    // else{
    //     countParagraph.classList.toggle('odd')
    // }
  }, [])
 
  return ( // step 2: render/mount the component
    <div className="Counter">
      <h2>Counter</h2>
 
      <p className="count">You clicked {count} times</p>
 
      <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button> 
 
    </div>
  );
}
 
export default Counter;