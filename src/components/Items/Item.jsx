import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import s from './Item.module.css';
import { Link } from 'react-router-dom';

export default  function Item({ item }) {

    return (
        <>
        <Col xs={12} sm={5} md={4} lg={3} className="justify-content-start">
        <Card className={s.Card}>
            <Card.Img variant="top" src={ item.all_imgs ? item.all_imgs[0] : item.img } alt={item.name} className={s.ItemImage}/>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.text}
                </Card.Text>
                <Button variant="primary" as={Link} to={'/item/' + item.id}>Comprar</Button>
            </Card.Body>
        </Card>
        </Col>
        </>
    );
}