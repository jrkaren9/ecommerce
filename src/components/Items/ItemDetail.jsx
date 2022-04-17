import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgPreview from '../ImgPreview';
import ItemCount from './ItemCount';
import s from './ItemDetail.module.css'


export default  function ItemDetail({ item, onAdd }) {
    return (
        <>
        <Container id={s.ItemDetail}>
            <Row className="justify-content-center"> 
                <Col xs={12} sm={8} id={s.MainInfo}>
                    <ImgPreview item={item}/>
                </Col>
                
                <Col xs={12} sm={4} id={s.BuySectionContainer}>
                    <div id={s.BuySection}>
                        <ItemCount stock={item.stock} initial={item.stock > 0 ? 1 : 0} onAdd={onAdd} />
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}