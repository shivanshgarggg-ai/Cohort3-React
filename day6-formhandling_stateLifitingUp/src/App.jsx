import React, { useState } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'

const App = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <div className='bg-gray-300 h-screen flex justify-center items-center-safe'>
      {
        toggle ? <Login setToggle = {setToggle} /> : <Register setToggle={setToggle}/>
      }
    </div>
  )
}

export default App
