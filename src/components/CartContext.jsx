import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const index = cart.findIndex( cartItem => cartItem.id === item.id);
        if(index >= 0)
        {
            const changedCart = [...cart];
            changedCart[index].count = changedCart[index].count + item.count;
            setCart(changedCart);
        }
        else
            setCart([...cart, item]);
    }

    
    const removeFromCart = (id) => {
        if (isInCart(id))
            setCart(cart.filter( item => item.id !== id));
        else
            console.log("El item ya no se encuentra en el carrito")
    }
    
    const buyAll = () => {
        // Fist we should send the cart content somewhere we we mark those items as bought
        // changing the stock

        setCart([]);
    }

    const getTotalItems = () => {
        let itemsAmount = 0;

        for (let index = 0; index < cart.length; index++) {
           itemsAmount = itemsAmount + cart[index].count;
        }

        return itemsAmount;
    }

    const isInCart = (id) => {
        return cart.findIndex(cartItem => cartItem.id === id) >= 0 ? true : false;
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, buyAll, getTotalItems}} >
            {children}
        </CartContext.Provider>
    )
}