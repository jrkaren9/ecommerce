import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import venchilogo from '../imgs/venchilogo-cropped.png';
import instagram from '../imgs/instagram-icon.svg';
import s from './Footer.module.css';

export default  function Footer() {
    
    return (
        <>
        <Container id={s.Footer}fluid>
            <Row id={s.FooterContent} className="justify-content-between">
                <Col xs={12} sm={3} md={2} >
                    <img src={venchilogo} alt="Venchi Logo" id={s.VenchiImage}/>
                </Col>
                <Col xs={12} sm={3} md={3} className={s.FooterColumn}>
                    <p>Nos ubicamos en Santiago de Chile, Chile</p>
                </Col>
                <Col xs={12} sm={3} md={3} className={s.FooterColumn}>
                    <p>Te puedes comunicar con nosotros por: xxx-xxx-xxxx</p>
                </Col>
                <Col xs={12} sm={3} md={3} className={s.FooterColumn}>
                    <p>Síguenos en nuestras redes sociales</p>
                    <a href="https://www.instagram.com/venchibake/">
                        <img src={instagram} alt="Instagram Logo" className={s.RRSS}/>
                    </a>
                </Col>
            </Row>
        </Container>
        </>
    );
}