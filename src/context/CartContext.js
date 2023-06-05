import React, { createContext } from "react";

export const CartContext  = createContext()

const initialstate = {cartItems : []}

const addproduct = (payload)=>{
    debugger

}

const contextvalues = {
    addproduct,
    ...initialstate
}

const CartContextProvider = ({children})=>{
    return (
        <CartContext.Provider value={contextvalues}>
         {children}
        </CartContext.Provider>
    )
}

export  default CartContextProvider