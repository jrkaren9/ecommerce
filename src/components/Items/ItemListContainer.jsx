import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../products.js'
import { useParams } from 'react-router-dom';
import LoadingMessage from '../LoadingMessage';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export default  function ItemListContainer() {

    const [items, setitems] = useState([]);

    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const db = getFirestore();
        let productsQuery = [];

        if (categoryId) {
            productsQuery = query(
                collection(db, 'products'),
                where("category", "==", categoryId)
            );
        } 
        else {
            productsQuery = collection(db, 'products');
        }
        
        getDocs(productsQuery).then( 
            (snapshot) => {
                if(snapshot.size === 0) {
                    console.log("No results");
                }
                setitems(
                    snapshot.docs.map(
                            (doc) => ({ id: doc.id, ...doc.data() })
                        )
                );
            }
        )
        .catch(error => console.log(error))
        .finally(() => { setLoading(false) });
    
    }, [categoryId]);

    useEffect(() => {

        
    }, []);
    
    return (
        <>
            { loading ? (<LoadingMessage />) : (<ItemList items={items}/>) }
        </>
    );
}