import React from 'react'
import Navbar from './components/Navbar'
import Usercard from "./components/Usercard"
import FOrm from "./components/FOrm";
import { useState } from "react";
const App = () => {
  
  
    const [toggle, setToggle] = useState(false)
      const [users, setUsers] = useState([])


  return (
    <div className='p-3 h-screen flex flex-col gap-4'>
      <Navbar setToggle={setToggle}/>


{
  toggle ? ( 
      <div className="flex">
     {
      users.map((elems) => {
        return <Usercard  user = {elems} setToggle = {setToggle} /> 
      })
     }
      </div> 
      
    ) : ( 

      <div className="
      flex justify-center h-[70%] items-center">
        <Form setUsers ={setUsers} />
      </div>
    )}
    </div>
  )
}



export default App
