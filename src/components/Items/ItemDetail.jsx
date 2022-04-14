import React from 'react';
import ItemCount from './ItemCount';

export default  function ItemDetail({ item, onAdd }) {
    
    return (
        <>
            <ItemCount stock = {item.stock} initial = {1} onAdd = {onAdd} />
            <p>{console.log(item)}</p>
        </>
    );
}