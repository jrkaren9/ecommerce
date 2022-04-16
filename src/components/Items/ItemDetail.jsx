import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItemCount from './ItemCount';
import s from './ItemDetail.module.css'


export default  function ItemDetail({ item, onAdd }) {
    return (
        <>
        <Row id={s.ItemDetail}>
            <Col xs={12} sm={8} id={s.MainInfo}>
                <h2>{item.name}</h2>
                <Row>
                    <Col xs={3}>
                    
                    </Col>
                    
                    <Col xs={9} className="d-flex justify-content-start">
                        <img src={item.img} alt={"Imagen del producto: " + item.name} className={s.ImageShown}/>
                    </Col>
                </Row>
                <p>{item.text}</p>
            </Col>
            
            <Col xs={12} sm={4} id={s.BuySectionContainer}>
                <div id={s.BuySection}>
                    <ItemCount stock={item.stock} initial={item.stock > 0 ? 1 : 0} onAdd={onAdd} />
                </div>
            </Col>
        </Row>
        </>
    );
}