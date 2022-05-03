import Button from 'react-bootstrap/Button';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CartContext } from './CartContext'
import EmptyCart from './EmptyCart';
import s from './Cart.module.css'
import button from './general/Buttons.module.css';

export default function Cart() {

    const { cart, removeFromCart, getTotalItems, getTotalCost } = useContext(CartContext);
    const total = useState(getTotalCost());
    const totalItems = getTotalItems();

    return (
        <>
        {cart.length > 0 &&
        <React.Fragment>
            <Container id={s.ItemsList} className="col-12 col-sm-10"> 
                <Row id={s.ItemHeader} className="justify-content-center align-items-center">
                    <Col sm={true} className="d-none d-sm-block">
                        <p><strong>Producto</strong></p>
                    </Col>
                    <Col sm={2} lg={1} className="d-none d-sm-block">
                        <p><strong>#</strong></p>
                    </Col>
                    <Col sm={2} lg={1} className="d-none d-sm-block">
                        <p><strong>Costo</strong></p>
                    </Col>
                    <Col sm={2} lg={1} className="d-none d-sm-block">
                    </Col>
                </Row>
                {cart.map(item => 
                    <Row key={item.id} className={s.ItemRow + " justify-content-center align-items-center"}>
                        <Col xs={12} sm={true} className={s.ItemDetail}>
                            <p className={s.ProductName}>{item.name}</p>
                        </Col>
                        <Col xs={3} sm={2} lg={1} className={s.ItemDetail}>
                            <p>{item.count}</p>
                        </Col>
                        <Col xs={4} sm={2} lg={1} className={s.ItemDetail}>
                            <p>{item.price}</p>
                        </Col>
                        <Col xs={5} sm={2} lg={1}>
                            <Button onClick={() => removeFromCart(item.id)} className={button.Primary}>
                                Eliminar
                            </Button>
                        </Col>
                    </Row>
                )}
                <Row className={s.ItemRow + " justify-content-center align-items-center"}>
                    <Col sm={true} className="d-none d-sm-block">
                    </Col>
                    <Col sm={2} lg={1} className="d-none d-sm-block">
                        <strong>{totalItems}</strong>
                    </Col>
                    <Col sm={2} lg={1} className="d-none d-sm-block">
                        <strong>{total}</strong>
                    </Col>
                    <Col sm={2} lg={1} className="d-none d-sm-block">
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center">
                    <Col xs={10} className="d-sm-none d-flex justify-content-center">
                        <p><strong>Total: </strong>{total}</p>
                    </Col>
                    <Col xs={10} className="d-flex justify-content-center">
                        <Button id={s.BuyAll} className={button.Primary} as={Link} to="/buyCart">Comprar todo</Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>}


        {cart.length <= 0 && <EmptyCart />}
            
        </>
    )
}
