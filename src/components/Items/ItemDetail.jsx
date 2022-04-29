import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ImgPreview from './ImgPreview';
import ItemCount from './ItemCount';
import s from './ItemDetail.module.css'
import button from '../general/Buttons.module.css';

export default  function ItemDetail({ item, onAdd, amount, amountInCart }) {
    const available = item.stock - amountInCart;
    console.log(available);
    
    return (
        <>
        <Container id={s.ItemDetail} fluid>
            <Row className="justify-content-center"> 
                <Col xs={10} sm={10} md={8} id={s.MainInfo} >
                    <ImgPreview item={item}/>
                </Col>
                
                <Col xs={10} sm={10} md={4} >
                    <div id={s.BuySection} >
                        <p id={s.Price}>Precio: {item.price}</p>
                        <ItemCount stock={available} initial={available > 0 ? 1 : 0} onAdd={onAdd} /> 
                        {amount > 0 ? 
                            <>
                                <Col xs={true} className="d-flex flex-column align-items-end">
                                    <p className={s.GoCartText}>¡Ya añadiste {amountInCart} unidades de este producto al carrito!</p>
                                    <Button className={s.GoCart + " " + button.Primary} 
                                        as={Link} to="/cart">Ir al carrito</Button>
                                </Col>
                            </> : ''
                        }
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}