import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getProduct } from '../products.js'
import { useParams } from 'react-router-dom';

export default  function ItemDetailContainer() {

    const [item, setitem] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        getProduct(id)
        .then((res) => setitem(res))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));

    }, [id]);

        const onAdd = (count) => {
        alert("Agregaste " + count + " items al carrito")
    }

    return (
        <>
            {
                loading ? (<h1>Cargando productos, espera!</h1>) : 
                (<ItemDetail item = {item} onAdd = {onAdd} />)
            }
        </>
    );
}