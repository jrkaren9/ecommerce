import React from 'react';
import cartsvg from "../imgs/cart.svg";

export default  function CartWidget() {
    
    return (
        <>
            <button type="button" aria-expanded="false" aria-label="Cart" className="Cart-Widget" > 
                <img src={cartsvg} alt="Cart" focusable="false" aria-hidden="true" />
            </button>
        </>
    );
}