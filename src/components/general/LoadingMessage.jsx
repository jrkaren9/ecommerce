import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner'
import s from './ExtraPages.module.css';

export default function LoadingMessage() {
  return (
    <>
    <Container id={s.LoadingBody}>
      <Row className="justify-content-center align-content-end" id={s.LoadingMessage}>
          <h1>Estamos cargando la información</h1>
          <Spinner animation="border" role="status" className={s["spinner-border"]}>
              <span className="visually-hidden">Loading...</span>
          </Spinner>
      </Row>
    </Container>
    </>
  )
}
