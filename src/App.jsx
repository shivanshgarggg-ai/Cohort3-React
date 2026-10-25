
import React, { useState } from 'react';
import Optimised from './Optimised'

const App = () => {

  console.log("app rendering");
  

  const [count, setCount] = useState(0);
  const [user, setUser] = useState({  name : "Raman"})
  


  return (
    <div>
      <h1>Count is - {count} </h1>
      <h1>name is - {user.name} </h1>

      <button onClick={() => setCount(count + 1)}>

        Increment

        </button>
      <button onClick={() => {
   
        setUser({name : "Piyush"});
      }}
    >
     Change Name 
        </button>


        
        
      
      
      
    </div>
  )
}

export default App
