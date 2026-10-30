import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const Form = ({ setUsers }) => {


       

     let { register,
         handleSubmit ,
          reset , 
        formState : {errors}
     } = useForm({
        mode : "onChange",
        defaultValues :{
            name :'' ,
            email :""
        }
     });
    

     let formSubmit = (data) => {
        console.log(data)
        setUsers((prev) => [...prev ,data ])
        reset()
     }
  return (
    <div className='flex flex-col gap-3 items-center' >
    <h1 className='text-xl font-bold'>Create user</h1>  
    <form 
         onSubmit={handleSubmit((formSubmit))}  
    
        className='w-90 flex flex-col gap-3 p-4 rounded border border-gray-500'>

        <input

                    {...register("name" ,{
                        required:"*Name is required" ,
                        pattern :
                        {
                            value : /^(?!\s*$).+/,
                            message : "Blank spaces is not allowed  "                        }
                    })}

         className='p-2  rounded outline-0 border border-red-400'
          type="text" 
          placeholder='Name'
          />    

            {
                errors.name && <p className='text-red-500'>{errors.name.message}</p>
            }
        <input  
              {...register("email" ,{
              required:"*Email is required" ,
            pattern : {
                    value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message : "Please enter valid email address"
            },
             })}

         className='p-2 rounded outline-0 border border-red-400' 
         type="email"
          placeholder='Email'
          />
             {
              errors.email && <p className='text-red-500'>{errors.email.message}</p>
              }
        <input
                    {...register("mobile" ,{
                        required:"*Mobile is required" ,
                        
                        
                             minLength:{
                            value :10 ,
                            message : "Minimum 10 digits are required",
                            },
                            maxLength : {
                            value : 10,
                            message : "Maximum 10 digits are required",
                            },

                            
                     })}
         className='p-2 rounded outline-0 border border-red-400'
          type="number" 
          placeholder='Mobile'
          />
             {
                errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>
             }
        <input
                    {...register("image" ,{required:"*Image is required" ,
                       
                    })}
         className='p-2 rounded outline-0 border border-red-400'
         type="url" 
         placeholder='Image'
         />
           {
            errors.image &&  <p className='text-red-500'>{errors.image.message}</p>
           }

        <button className='text-white bg-blue-700 rounded p-2 cursor-pointer'>Add User</button>


 
    </form>
    </div>
  )
}

export default Form
