import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import s from './CarWidget.module.css'
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

export default  function CartWidget() {
    const { getTotalItems } = useContext(CartContext);

    let itemsAmount = getTotalItems();
    
    return (
            <React.Fragment>
                <span>{itemsAmount}</span>
                <button type="button" aria-expanded="false" aria-label="Cart" className={s.CartWidget} > 
                <Link to="/cart">
                    < AiOutlineShoppingCart className={s.colorIcon} size={25} />
                </Link>
                </button>
            </React.Fragment>
    );
}