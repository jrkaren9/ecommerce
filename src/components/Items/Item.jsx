import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import s from './Item.module.css';
import button from '../general/Buttons.module.css';
import { Link } from 'react-router-dom';

export default  function Item({ item }) {

    return (
        <>
        <Col xs={12} sm={4} className="justify-content-start">
        <Card className={s.Card}>
            <Card.Img variant="top" src={ item.all_imgs ? item.all_imgs[0] : item.img } alt={item.name} className={s.ItemImage}/>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.text} 
                    <br />
                    <br />
                    Precio: {item.price}
                </Card.Text>
                <Button variant="primary" as={Link} to={'/item/' + item.id} className={button.Primary + " " + s.BuyButton}>Comprar</Button>
            </Card.Body>
        </Card>
        </Col>
        </>
    );
}