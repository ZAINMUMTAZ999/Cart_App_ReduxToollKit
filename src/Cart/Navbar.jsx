import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';



const Navbar = () => {
    const { amount } = useSelector((store) => store.cart)
// console.log(data)

  

    return (
        <> <h1 className='lg:bg-red-800 text-3xl  text-black font-semibold  grid place-items-center py-3 sm:bg-green-400 sm:grid place-content-center xs bg-blue-500 '>Redux Toolkit   <CiShoppingCart className='absolute top-2.4 right-3  ' /> 
        <p className=' absolute top-0 right-0 -mt-1 -ml-11 bg-black px-2 py-1  text-white rounded-full text-xs'>
            
        {amount}
        </p>
        </h1>
 
        </>
    )
}

export default Navbar