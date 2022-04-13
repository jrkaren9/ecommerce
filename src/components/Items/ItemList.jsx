import React from 'react';
import Item from './Item';

export default  function ItemList({ items, onAdd }) {
    
    return (
        <>
            {items.map(item => <Item item = {item} onAdd = {onAdd} />)}
        </>
    );
}