import React, { useEffect } from 'react'
import Navbar from './Cart/Navbar'



import { useDispatch, useSelector } from 'react-redux'
import { totals } from './Cart/Features/cartslice'
import Hero from './Cart/Hero';

const App = () => {
  const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(totals())
  }, [cartItems])
  return (
    <>
      <Navbar />
      <Hero />
    </>




  )
}

export default App