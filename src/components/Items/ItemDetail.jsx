import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ImgPreview from '../ImgPreview';
import ItemCount from './ItemCount';
import s from './ItemDetail.module.css'

export default  function ItemDetail({ item, onAdd, amount }) {

    return (
        <>
        <Container id={s.ItemDetail} fluid>
            <Row className="justify-content-center"> 
                <Col xs={10} sm={10} md={8} id={s.MainInfo} >
                    <ImgPreview item={item}/>
                </Col>
                
                <Col xs={10} sm={10} md={4} >
                    <div id={s.BuySection} >
                        {amount <= 0 ? 
                            <ItemCount stock={item.stock} initial={item.stock > 0 ? 1 : 0} onAdd={onAdd} /> :
                            <>
                                <ItemCount stock={item.stock} initial={item.stock > 0 ? 1 : 0} onAdd={onAdd} />
                                <Col xs={true} className="d-flex flex-column align-items-center">
                                    <Button className={s.GoCart} 
                                        as={Link} to="/cart">Ir al carrito</Button>
                                    <p className={s.GoCartText}>Ya añadiste este producto al carrito!</p>
                                </Col>
                            </>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}