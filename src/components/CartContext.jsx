import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const localCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, setCart] = useState(localCart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        const index = cart.findIndex( cartItem => cartItem.id === item.id);
        if(index >= 0)
        {
            const changedCart = [...cart];
            changedCart[index].count = changedCart[index].count + item.count;
            setCart(changedCart);
        }
        else {
            setCart([...cart, { id: item.id, count: item.count, price: item.price, name: item.name } ]);
        }
    }

    const removeFromCart = (id) => {
        if (isInCart(id)) {
            setCart(cart.filter( item => item.id !== id));
        }
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

    const getTotalCost = () => {
        const total = cart.reduce( (total, item) => {
            return total + Number(item.price.replace('$', ''))*item.count
        }, 0);

        return "$" + parseFloat(total).toFixed(2);
    }

    const getProductAmount = (id) => {
        const filter = cart.filter(cartItem => cartItem.id === id);
        return filter.length > 0 ? filter[0].count : 0;
    }

    const isInCart = (id) => {
        return cart.findIndex(cartItem => cartItem.id === id) >= 0 ? true : false;
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, buyAll, getTotalItems, getTotalCost, getProductAmount}} >
            {children}
        </CartContext.Provider>
    )
}