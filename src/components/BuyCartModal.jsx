import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import s from './BuyCart.module.css';
import button from './general/Buttons.module.css';
import venchilogo from './imgs/venchilogo.jpg';

export default function BuyCartModal({ id, show, onHide }) {
    return (
        <Modal
            show={show}
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Resumen de la compra
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>¡Tu compra fue completada con éxito!</h4>
                <p>
                    El id de tu compra es <span style={{"wordWrap": "break-all"}}>{id}</span>. Guarda este id para hacer seguimiento de tu compra.
                </p>
                <img src={venchilogo} alt="Venchi Logo" id={s.VenchiImage}/>
            </Modal.Body>
            <Modal.Footer>
                <Button className={button.Primary} onClick={onHide} as={Link} to="/">Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

