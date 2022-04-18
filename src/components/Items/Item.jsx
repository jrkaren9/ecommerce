import React from 'react';
import Row from 'react-bootstrap/Row';
import { Button, Card, Col } from 'react-bootstrap';
import s from './Item.module.css';
import { Link } from 'react-router-dom';

export default  function Item({ item }) {

    return (
        <>
        <Col xs={true} className="justify-content-start">
        <Card style={{ width: '18rem' }} className={s.Card}>
            <Card.Img variant="top" src={ item.all_imgs ? item.all_imgs[0] : item.img } alt={item.name} className={s.ItemImage}/>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.text}
                </Card.Text>
                <Row className="justify-content-end">
                    <Col xs={5}>
                        <Button variant="primary" as={Link} to={'/item/' + item.id}>Comprar</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </Col>
        </>
    );
}