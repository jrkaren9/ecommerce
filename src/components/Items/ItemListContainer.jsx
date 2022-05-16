import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import LoadingMessage from '../general/LoadingMessage';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import NoResults from '../general/NoResults';

export default  function ItemListContainer() {

    const [items, setitems] = useState([]);

    const [loading, setLoading] = useState(true);
    const [noResults, setNoResults] = useState(false);
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
                    setNoResults(true);
                }
                else {
                    setNoResults(false);
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

    return (
        <>
            { loading ? (<LoadingMessage />) : noResults ? (<NoResults />) : (<ItemList items={items}/>) }
        </>
    );
}