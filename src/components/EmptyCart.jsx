import Button from 'react-bootstrap/Button';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import s from './general/Loading.module.css';

export default function EmptyCart() {
  return (
    <>
    <Container>
        <Row className="justify-content-center align-content-end" id={s.EmptyCart}>
            <h1>No hay nada en el carrito</h1>
            <Button variant="primary" as={Link} to="/" id={s.ButtonHome}>
                Ir a comprar!
            </Button>
        </Row>
    </Container>
    </>
  )
}
