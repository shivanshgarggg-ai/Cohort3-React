import React from 'react'
import { useForm } from 'react-hook-form';

const RHF = () => {

    let { register,
      handleSubmit, 
      reset,
      formState: {errors},


    } = useForm()

  return (

    
      <div
      

      
      className='w-80  bg-white' >
      <form  onSubmit={handleSubmit((data) => {
        console.log(data)
        reset()
      })}className=' p-6 rounded flex flex-col gap-4' >

        <input {...register("productName")}
        className='p-2 rounded border border-gray-400'
         type="text" 
         placeholder='Product Name' 
         />    
        <input {...register("price")}

        
        className='p-2 rounded border border-gray-400' 
        type="text"
         placeholder='Price'
          />    


       <input    {...register("category")}
        className='p-2 rounded border border-gray-400' 
        type="text" 
       placeholder='category' 
       />

        <input {...register("image")}

         className='p-2 border border-gray-400 rounded'
          type="text
        " placeholder='Image'/>
        <button className='p-2 bg-blue-600 text-white rounded'>CREATE</button>

      </form>
    </div>
  )
}

export default RHF
