import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import s from './CarWidget.module.css'
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

export default  function CartWidget() {
    const { cart } = useContext(CartContext);
    let itemsAmount = 0;

    for (let index = 0; index < cart.length; index++) {
        itemsAmount = itemsAmount + cart[index].count;
    }
    
    return (
        <> 
            <span>{itemsAmount}</span>
            <button type="button" aria-expanded="false" aria-label="Cart" className={s.CartWidget} > 
            <Link to="/cart">
                < AiOutlineShoppingCart className={s.colorIcon} size={25} />
            </Link>
            </button>
        </>
    );
}