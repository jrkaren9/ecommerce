import React from 'react';
import Item from './Item';

export default  function ItemList({ items, onAdd }) {
    
    return (
        <>
            {items.map(item => <Item key = {item.id} item = {item} onAdd = {onAdd} />)}
        </>
    );
}