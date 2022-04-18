import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => console.log(`Agregaste: ${item.count} de ${item.name}`);
    const removeFromCart = (item) => console.log(item);
    const buyAll = () => console.log('buy all');

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, buyAll}} >
            {children}
        </CartContext.Provider>
    )
}