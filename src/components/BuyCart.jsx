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
    const [repeatEmail, setRepeatEmail] = useState("");
    
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

        const repeatEmailValidated = validateRepeatEmail(repeatEmail);
        if (repeatEmailValidated) newErrors.repeatEmail = repeatEmailValidated;
        
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

        if(!phoneNumber) return "Ingresa un n??mero de tel??fono";
        else if(!regex.test(phoneNumber)) return "Ingresa un n??mero de tel??fono v??lido (123-123-1234)";
    }

    const validateEmail = email => {
        email = cleanInput(email);
        setEmail(email);

        const regex = /\w+@\w{2,}\.\w{2,}/g;

        if(!email) return "Ingresa un email";
        else if(email.length <= 2) return "El email es muy corto para ser v??lido";
        else if (!regex.test(email)) return "Ingresa un email v??lido";
    }

    const validateRepeatEmail = repeatEmail => {
        repeatEmail = cleanInput(repeatEmail);
        setRepeatEmail(repeatEmail);

        if(email !== repeatEmail) return "Los emails son diferentes"
    }

    const cleanInput = input => {
        input = input.trim();
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
                <Col xs={12} sm={5} id={s.CartSummary}>
                    <p> Est??s a punto de comprar: </p>
                    {
                        cart.map( cartItem => {
                            return <React.Fragment key={cartItem.id}>
                                <p>
                                    {cartItem.name}: {cartItem.count} x {cartItem.price}
                                </p>
                            </React.Fragment>
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
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                { errors.name }
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group controlId="validationCustomPhoneNumber">
                            <Form.Label>N??mero de tel??fono</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="N??mero de tel??fono"
                                value={ phone }
                                onChange={(e) => {
                                    setPhone(e.currentTarget.value)
                                }}
                                isInvalid={ !!errors.phone }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                               { errors.phone }
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationCustomEmail">
                            <Form.Label>Correo electr??nico</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Correo electr??nico"
                                value={ email }
                                onChange={(e) => {
                                    setEmail(e.currentTarget.value)
                                }}
                                isInvalid={ !!errors.email }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                { errors.email }
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationRepeatEmail">
                            <Form.Label>Repite el correo electr??nico</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Correo electr??nico"
                                value={ repeatEmail }
                                onChange={(e) => {
                                    setRepeatEmail(e.currentTarget.value)
                                }}
                                isInvalid={ !!errors.repeatEmail }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                { errors.repeatEmail }
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
