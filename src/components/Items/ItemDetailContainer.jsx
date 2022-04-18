import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getProduct } from '../products.js'
import { useParams } from 'react-router-dom';
import LoadingMessage from '../LoadingMessage';

export default  function ItemDetailContainer() {

    const [item, setitem] = useState({});
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        getProduct(id)
        .then((res) => setitem(res))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));

    }, [id]);

    const onAdd = (count) => {
        setAmount(count);
        alert("Agregaste " + count + " items al carrito");
    }

    return (
        <>
            {
                loading ? (<LoadingMessage />) : (<ItemDetail item = {item} onAdd = {onAdd} amount={amount}/>)
            }
        </>
    );
}