import Button from 'react-bootstrap/Button';
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContext'
import { Col, Container, Row } from 'react-bootstrap';
import ItemCount from './Items/ItemCount';
import EmptyCart from './EmptyCart';

export default function Cart() {

    const { cart, buyAll, removeFromCart } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let value = cart.reduce( (total, item) => {
            return total + Number(item.price.replace('$', ''))*item.count
        }, 0);

        setTotal(value);
    }, [cart]);

    return (
        <>
        {cart.length > 0 &&
        <React.Fragment>
            <Container> {
                cart.map(item => 
                    <Row key={item.id} className="justify-content-center align-items-center">
                        <Col xs={6}>
                            {item.name}
                        </Col>
                        <Col xs={1}>
                            {item.count}
                        </Col>
                        <Col xs={1}>
                            {item.price}
                        </Col>
                        <Col xs={3}>
                            <Button onClick={() => removeFromCart(item.id)} >Eliminar</Button>
                        </Col>
                    </Row>
                )}
            </Container>
            <p>{total}</p>
            <Button onClick={buyAll}>Comprar todo</Button>
        </React.Fragment>}


        {cart.length <= 0 && <EmptyCart />}
            
        </>
    )
}
