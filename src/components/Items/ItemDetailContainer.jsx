import React, { useContext, useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import LoadingMessage from '../general/LoadingMessage';
import { CartContext } from '../CartContext';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default  function ItemDetailContainer() {

    const [item, setitem] = useState({});
    const [loading, setLoading] = useState(true);
    const [amountInCart, setAmountInCart] = useState(0);
    const { id } = useParams();
    const { addToCart, getProductAmount } = useContext(CartContext);

    useEffect(() => {
        const db = getFirestore();
        const product = doc(db, 'products', id);
        getDoc(product).then( (snapshot) => {
            if(snapshot.exists()) {
                setitem({ id: snapshot.id, ...snapshot.data() });
                setAmountInCart(getProductAmount(snapshot.id));
            }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, [id, getProductAmount]);

    const onAdd = (count) => {
        addToCart({ ...item, count});
    }

    return (
        <>
            {
                loading ? 
                    (<LoadingMessage />) : 
                    (<ItemDetail item={item} onAdd={onAdd} amountInCart={amountInCart} />)
            }
        </>
    );
}