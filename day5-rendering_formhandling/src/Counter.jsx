import React, { useState } from 'react'
import { renderToString } from 'react-dom/server';

const Counter = () => {
    console.log("Console is rendering...");
    
let [count,setCount] = useState(0)

  return (
    <div>
     <h1>Count is {count}</h1>       
    <button onClick={() =>{setCount(count + 1 )}}>Increment</button>
    </div>
  )
}

export default Counter