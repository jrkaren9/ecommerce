import React, { useEffect, useState } from 'react';
import Logo from "../imgs/venchilogo.jpg"
import ItemList from './ItemList';
import { getProducts } from '../products.js'
import { useParams } from 'react-router-dom';
import { CardGroup } from 'react-bootstrap';

export default  function ItemListContainer() {

    const [items, setitems] = useState([])
    const { categoryId } = useParams();

    useEffect(() => {

        getProducts(categoryId)
            .then(res => setitems(res))
            .catch(error => console.log(error));

    }, [categoryId])

    const onAdd = (count) => {
        alert("Agregaste " + count + " items al carrito")
    }
    
    return (
        <>
            <CardGroup>
                <ItemList items={items} onAdd = {onAdd}/>
            </CardGroup>
            <div>
                <img src={Logo} alt="Venchi Logo" focusable="false" aria-hidden="true" className="Logo" />
            </div>
        </>
    );
}