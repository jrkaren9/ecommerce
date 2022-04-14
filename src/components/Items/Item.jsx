import React from 'react';
import { Card } from 'react-bootstrap';

export default  function Item({ item, onAdd }) {
    
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.text}
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}