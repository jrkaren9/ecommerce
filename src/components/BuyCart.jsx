import React, { useContext, useState } from 'react'
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s from './BuyCart.module.css';
import button from './general/Buttons.module.css'
import { CartContext } from './CartContext';
import BuyCartModal from './BuyCartModal';

export default function BuyCart() {

    const [orderId, setOrderId] = useState("");
    const { cart, buyAll, getTotalCost } = useContext(CartContext);
    const total = getTotalCost();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    
    const [errors, setErrors] = useState({});

    const [modalShow, setModalShow] = useState(false);

    const findFormErrors = () => {
        const newErrors = {};
    
        const nameValidated = validateName(name);
        if (nameValidated) newErrors.name = nameValidated;

        const phoneNumberValidated = validatePhoneNumber(phone);
        if (phoneNumberValidated) newErrors.phone = phoneNumberValidated;

        const emailValidated = validateEmail(email);
        if (emailValidated) newErrors.email = emailValidated;
        
        return newErrors;
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        const newErrors = findFormErrors();
        setErrors(newErrors);

        if ( Object.keys(newErrors).length <= 0 && cart.length > 0 ) {
            sendOrder();
        }        
    };

    const sendOrder = () => {
        const date = serverTimestamp();
        
        const order = {
            buyer: { name: name, phone: phone, email: email },
            items: { cart },
            date: { date },
            total: total
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then( 
            ({ id }) => {
                setOrderId(id);
                buyAll();
                setOrderId(id);

                setModalShow(true);
            }
        );    
        
        
    };

    const validateName = (name) => {
        name = cleanInput(name);
        setName(name);
 
        if(!name) return "Ingresa un nombre";
        else if(name.length <= 2) return "El nombre es muy corto";
        else if(name.length >= 20) return "El nombre es muy largo";
    }

    const validatePhoneNumber = phoneNumber => {
        phoneNumber = cleanInput(phoneNumber);
        setPhone(phoneNumber);

        const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

        if(!phoneNumber) return "Ingresa un número de teléfono";
        else if(!regex.test(phoneNumber)) return "Ingresa un número de teléfono válido (123-123-1234)";
    }

    const validateEmail = email => {
        email = cleanInput(email);
        setEmail(email);

        if(!email) return "Ingresa un email";
        else if(email.length <= 2) return "Ingresa un email válido";;
    }

    const cleanInput = input => {
        const regex = /\s\s+/g;
        return regex.test(input) ? 
            input.replace(/\s\s+/g, ' ') : input
    }

    return (
        <>
        <BuyCartModal
            id={orderId}
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <Container id={s.BuySection}>
            <Row>
                <Col xs={12} sm={5}>
                    <p> Estás a punto de comprar: </p>
                    {
                        cart.map( cartItem => {
                            return <>
                                <p key={cartItem.id}>
                                    {cartItem.count} x {cartItem.name}
                                </p>
                            </>
                        })
                    }
                    <p>Por un total de: {total}</p>
                </Col>

                <Col xs={12} sm={7}>
                    <Form id={s.BuyForm} noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="validationCustomUsername">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                value={ name }
                                onChange={(e) => {
                                    setName(e.currentTarget.value)
                                }}
                                isInvalid={ !!errors.name }
                                isValid={ !!!errors.name }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                { errors.name }
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group controlId="validationCustomPhoneNumber">
                            <Form.Label>Número de teléfono</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Número de teléfono"
                                value={ phone }
                                onChange={(e) => {
                                    setPhone(e.currentTarget.value)
                                }}
                                isInvalid={ !!errors.phone }
                                isValid={ !!!errors.phone }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                               { errors.phone }
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationCustomEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Correo electrónico"
                                value={ email }
                                onChange={(e) => {
                                    setEmail(e.currentTarget.value)
                                }}
                                isInvalid={ !!errors.email }
                                isValid={ !!!errors.email }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                { errors.email }
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" className={button.Primary} id={s.BuyButton}>
                            Comprar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}
