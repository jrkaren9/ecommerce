import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s from './BuyCart.module.css';
import button from './general/Buttons.module.css'

export default function BuyCart({ items }) {
    const [orderId, setOrderId] = useState("");
    
    const sendOrder = (e) => {
        e.preventDefault();
        const order = {
            buyer: { name: "", phone: "", email: "" },
            items: { test: "test" },
            total: ""
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then( 
            ({ id }) => setOrderId(id) & console.log(id)
        );    
        
        
    };

    return (
        <Container id={s.BuySection}>
            <Row>

                <Col xs={12} sm={true}>
                    <p> Estás a punto de comprar: </p>
                </Col>

                <Col xs={12} sm={8}>
                    <Form id={s.BuyForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className={button.Primary} onClick={(e) => sendOrder(e)}>
                            Submit
                        </Button>
                    </Form>
                </Col>

                
            </Row>
        </Container>
    )
}
