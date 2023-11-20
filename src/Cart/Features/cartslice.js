import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";
const initialState={
     cartItems:data,
    amount:1,
    total:0,
    isLoading:true
}
const cartslice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
         state.cartItems=[]
        },
    remove:(state,action)=>{
        
        const itemId = action.payload
        // console.log(itemId)
        state.cartItems = state.cartItems.filter((item)=>item.id !==itemId)
        
    },


increase:(state,action)=>{
    const itemId = action.payload
  

    const cartItem = state.cartItems.find((item)=>item.id === itemId.id)
    cartItem.amount = cartItem.amount  + 1


},
  decrease:(state,action)=>{
    const itemId = action.payload
    const increment = state.cartItems.find((item)=>item.id === itemId.id)
    increment.amount = increment.amount - 1
  },
  totals : (state)=>{
      let amount = 0;
      let price = 0;
   state.cartItems.forEach((item)=>{
        amount += item.amount
        price += item.price
      })
      state.amount = amount 
      state.total = amount * price 
}
 
     
     
}

    
})

export const {clearCart,remove,increase,decrease,totals}=cartslice.actions
// console.log(cartslice)
export  default cartslice.reducer