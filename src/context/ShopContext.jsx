import React, {createContext} from "react";
import all_product from "../comps/assets/all_product";
import { useState } from "react";


export const ShopContext = createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index<all_product.length; index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
   
    const [cartItems,setCartItems]=useState(getDefaultCart());
    

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price*cartItems[item];
            }
        }
        return totalAmount;
    }

    const getCartCount=()=>{
        let itemCnt=0;
        for(let item in cartItems) if(cartItems[item])itemCnt+=cartItems[item];
        return itemCnt;
    }

    const contextValue = {all_product,getTotalCartAmount,getCartCount,cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;