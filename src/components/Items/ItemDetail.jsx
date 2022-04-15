import React from 'react';
import ItemCount from './ItemCount';

export default  function ItemDetail({ item, onAdd }) {
    return (
        <>
            <section className = "col-8">
                <h2>{item.name}</h2>
                <p>{item.text}</p>
            </section>
            <ItemCount stock = {item.stock} initial = {item.stock > 0 ? 1 : 0} onAdd = {onAdd} className = "col-4"/>
        </>
    );
}