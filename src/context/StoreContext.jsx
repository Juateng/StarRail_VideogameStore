import React, { createContext, useState } from "react";
import { prod_list } from "../assets/assets";

export const StoreContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < prod_list.length; index++){
        cart[index] = 0;
    }
    return cart;
}

const StoreContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart());
   
    
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue = {prod_list,cartItems,addToCart,removeFromCart};

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider