import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import s from './CarWidget.module.css'

export default  function CartWidget() {
    
    return (
        <>
            <button type="button" aria-expanded="false" aria-label="Cart" className={s.CartWidget} > 
                < AiOutlineShoppingCart className={s.colorIcon} />
            </button>
        </>
    );
}