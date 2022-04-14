import React, { useEffect, useState } from 'react';
import Logo from "../imgs/venchilogo.jpg"
import ItemList from './ItemList';
import { getProducts } from '../products.js'
import { useParams } from 'react-router-dom';
import { CardGroup } from 'react-bootstrap';

export default  function ItemListContainer({ greeting }) {

    const [items, setitems] = useState([])
    const { id } = useParams;

    useEffect(() => {

        getProducts(id)
            .then(res => setitems(res))
            .catch(error => console.log(error));

    }, [id])

    const onAdd = (count) => {
        alert("Agregaste " + count + " items al carrito")
    }
    
    return (
        <>
            <p className='d-flex justify-content-center welcome'>{greeting}</p>
            <CardGroup>
                <ItemList items={items} onAdd = {onAdd}/>
            </CardGroup>
            <div>
                <img src={Logo} alt="Venchi Logo" focusable="false" aria-hidden="true" className="Logo" />
            </div>
        </>
    );
}