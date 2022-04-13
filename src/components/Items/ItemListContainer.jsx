import React, { useEffect, useState } from 'react';
import Logo from "../imgs/venchilogo.jpg"
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from '../products.js'
import { useParams } from 'react-router-dom';
import { CardGroup } from 'react-bootstrap';

export default  function ItemListContainer({ greeting }) {

    const [items, setitems] = useState([])
    const { id } = useParams;

    useEffect( () => {
        const promiseProducts = new Promise((res, rej) => {
            setTimeout(() => {
                if(id) {
                    res(products.filter( item => item.categoria == id ));
                }
                else {
                    res(products);
                }
            }, 1)
        });

        promiseProducts.then((res) => {
            setitems(res);
        })

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