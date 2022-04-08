import React from 'react';
import Logo from "../imgs/venchilogo.jpg"
import ItemCount from './ItemCount';

export default  function ItemListContainer({ greeting }) {
    
    return (
        <>
        <p className='d-flex justify-content-center welcome'>{greeting}</p>
        <ItemCount stock={5}/>
        <div>
             <img src={Logo} alt="Venchi Logo" focusable="false" aria-hidden="true" className="Logo" />
        </div>
        </>
    );
}