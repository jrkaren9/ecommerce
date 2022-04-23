import React, { useContext, useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getProduct } from '../products.js'
import { useParams } from 'react-router-dom';
import LoadingMessage from '../LoadingMessage';
import { CartContext } from '../CartContext';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default  function ItemDetailContainer() {

    const [item, setitem] = useState({});
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(0);
    const { id } = useParams();

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        
        const db = getFirestore();
        const product = doc(db, 'products', id);
        getDoc(product).then( (snapshot) => {
            if(snapshot.exists()) {
                setitem({ id: snapshot.id, ...snapshot.data() })
                console.log({ id: snapshot.id, ...snapshot.data() })
            }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));


    }, [id]);

    const onAdd = (count) => {
        setAmount(count);
        addToCart({ ...item, count});
    }

    return (
        <>
            {
                loading ? (<LoadingMessage />) : (<ItemDetail item = {item} onAdd = {onAdd} amount={amount}/>)
            }
        </>
    );
}