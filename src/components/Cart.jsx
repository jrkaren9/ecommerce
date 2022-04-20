import Button from 'react-bootstrap/Button';
import React, { useContext } from 'react'
import { CartContext } from './CartContext'

export default function Cart() {

    const { cart, buyAll, removeFromCart } = useContext(CartContext);

    return (
        <>
        {cart.length > 0 &&
            cart.map(item => 
                <React.Fragment key={item.id}>
                    <span>{item.name}</span> <br />
                    <span>{item.count}</span> <br />
                    <Button onClick={() => removeFromCart(item.id)} >Eliminar</Button>
                </React.Fragment>
            )
        }

        <Button onClick={buyAll}>Comprar todo</Button>
        </>
    )
}
