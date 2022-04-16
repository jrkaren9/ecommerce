import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import s from './Item.module.css';

export default  function Item({ item }) {
    
    return (
        <>
        <Col xs={true} className="justify-content-center">
        <Card style={{ width: '18rem' }} className={s.Card}>
            <Card.Img variant="top" src={ item.all_imgs ? item.all_imgs[0] : item.img } />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.text}
                </Card.Text>
                <Row className="justify-content-end">
                    <Col xs={5}>
                        <Button variant="primary">Comprar</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </Col>
        </>
    );
}