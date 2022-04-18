import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../products.js'
import { useParams } from 'react-router-dom';
import LoadingMessage from '../LoadingMessage';

export default  function ItemListContainer() {

    const [items, setitems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
    
        getProducts(categoryId)
            .then(res => setitems(res))
            .catch(error => console.log(error))
            .finally(() => { setLoading(false) });

    }, [categoryId]);
    
    return (
        <>
            { loading ? (<LoadingMessage />) : (<ItemList items={items}/>) }
        </>
    );
}