import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import s from './ExtraPages.module.css';
import { Link } from 'react-router-dom';

export default function NoResults() {
  return (
    <>
    <Container id={s.NoResults}>
      <Row className="justify-content-center align-content-end">
          <h1>No se tienen productos para esta categoría</h1>
          <Button variant="primary" as={Link} to="/" id={s.ButtonHome}>
                ¡Ir al Inicio!
          </Button>
      </Row>
    </Container>
    </>
  )
}
