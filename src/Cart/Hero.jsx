import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decrease, increase, remove} from './Features/cartslice';
import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import { Link } from 'react-router-dom';
const Hero = () => {
    const { amount, cartItems, id ,total} = useSelector((store) => store.cart)
    const dispatch = useDispatch()

    if (amount < 1) {
        return (
            <>
                <h1 className='grid place-content-center text-5xl text-red-600'>
                    Your Bag is empty!!
                </h1>

     
           
              </>
        )
    }
    return (
        <div className=' m-5 '>
            {/* //Mapping... */}
            {
                cartItems.map((item) => {
                    const { price, title, Image, id, amount } = item
                    return (
                        <div key={item.id} className=' grid place-content-center m-4'>
                            <i> <u className='font-extrabold text-2xl'>Brand:{title}</u>
                            </i>
                            <img src={Image} alt={title} />
                            <button className='font-bold bg-yellow-800 p-1 m-0' onClick={() => dispatch(remove(id))}>remove</button>
                            <div className='grid place-content-center'>
                                {/* increaseBtn */}
                                <button onClick={() => {
                                    return (
                                        dispatch(increase({ id }))
                                    )
                                }}>
                                    <FaChevronUp />

                                </button>

                                <p>
                                    {amount}
                                </p>
                                {/*      DecreaseBtn     */}
                                <button onClick={() => {
                                    if (amount <= 1) {
                                        return (dispatch(remove(id)))
                                    }
                                    return (dispatch(decrease({ id })))

                                }}><FaChevronDown /></button>

                            </div>
                           
                            <b className='m-4'>Price: ${price}</b>



                        </div>
                    )
                })
            }
            {/* //Footer*/}

            <footer className='p-4'>
                <hr className='pt-3' />
                <div className='flex justify-center items-center p-2'>

                    <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded p-2' onClick={() => dispatch(clearCart())}>Clear</button>
                </div>
                <p className='grid place-content-center'>Total:${total.toFixed(2)}</p>
            </footer>
        </div>
    )
}

export default Hero