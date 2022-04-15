import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ItemCount from './ItemCount';
import s from './ItemDetail.module.css'


export default  function ItemDetail({ item, onAdd }) {
    return (
        <>
        <Row id={s.ItemDetail}>
            <Col xs={8} id={s.MainInfo}>
                <h2>{item.name}</h2>
                <img src={item.img} alt={"Imagen del producto: " + item.name} />
                <p>{item.text}</p>
            </Col>
            
            <Col xs={4} id={s.BuySectionContainer}>
                <div id={s.BuySection}>
                    <ItemCount stock={item.stock} initial={item.stock > 0 ? 1 : 0} onAdd={onAdd} className="col-4"/>
                </div>
            </Col>
        </Row>
        </>
    );
}