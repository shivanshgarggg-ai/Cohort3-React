import React, { useRef, useState } from 'react'


const Form = () => {


console.log("apprendering")


const [products, setProducts] = useState({})
console.log("this is product->" , products)

const formRef = useRef({})
console.log(formRef)


let obj = {

    pName: formRef.current.product.value,
    price: formRef.current.price.value,
    category: formRef.current.category.value,
    image: formRef.current.image.value,

}
setProducts(obj)


let inpRef = useRef({});
console.log(inpRef)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formRef.current.productName.value)
        console.log(formRef.current.price.value)
        console.log(formRef.current.category.value)
        console.log(formRef.current.image.value)

    }


  return (
    <div className='w-80  bg-white' >
      <form onSubmit={handleSubmit} className=' p-6 rounded flex flex-col gap-4' >

        <input 

        ref = {(e) => formRef.current.productName = e}
        
    
        className='p-2 rounded border border-gray-400'
         type="text" 
         placeholder='Product Name' 
         />    
        <input
         ref = {(e) => formRef.current.price = e}
        
        className='p-2 rounded border border-gray-400' 
        type="text"
         placeholder='Price'
          />    

       <span>Select Category</span> 

       <select  
        ref = {(e) => formRef.current.category = e}
        
                    className='p-2 border border-gray-400 rounded'>
            <option value="Mens">Mens</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
        </select>
        <input 
         ref = {(e) => formRef.current.image = e}
         className='p-2 border border-gray-400 rounded'
          type="text
        " placeholder='Image'/>
        <button className='p-2 bg-blue-600 text-white rounded'>CREATE</button>

      </form>
    </div>
  )
}

export default Form
