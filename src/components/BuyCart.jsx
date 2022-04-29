import React, { useContext, useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s from './BuyCart.module.css';
import button from './general/Buttons.module.css'
import { CartContext } from './CartContext';

export default function BuyCart({ items }) {

    const [orderId, setOrderId] = useState("");
    const { buyAll } = useContext(CartContext);

    const [ form, setForm ] = useState({});
    const [ errors, setErrors ] = useState({});

    const setField = (field, value) => {
        setForm({
          ...form,
          [field]: value
        })
        // Check and see if errors exist, and remove them from the error object:
        if ( !!errors[field] ) setErrors({
            ...errors,
            [field]: null
        })
    };

    const findFormErrors = () => {
        const { name, phoneNumber, email } = form
        const newErrors = {}
    
        const nameValidated = validateName(name);
        if (nameValidated) newErrors.name = nameValidated;

        const phoneNumberValidated = validatePhoneNumber(phoneNumber);
        if (phoneNumberValidated) newErrors.phoneNumber = phoneNumberValidated;

        const emailValidated = validateEmail(email);
        if (emailValidated) newErrors.email = emailValidated;
        
        return newErrors;
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        const newErrors = findFormErrors();

        if ( Object.keys(newErrors).length > 0 ) {
            setErrors(newErrors);
          } else {
            console.log('Thank you for your feedback!');
            sendOrder();
          }        
    };

    const sendOrder = () => {
        console.log(form);
        const order = {
            buyer: { name: form.name, phone: form.phoneNumber, email: form.email },
            items: { test: "test" },
            total: ""
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then( 
            ({ id }) => {
                setOrderId(id);
                buyAll();
                console.log(id);
            }
        );    
        
        
    };

    const validateName = (name) => {
        name = cleanInput(name);
        setField("name", name);

        if(!name) return "Ingresa un nombre";
        else if(name.length <= 2) return "El nombre es muy corto";
        else if(name.length >= 20) return "El nombre es muy largo";
    }

    const validatePhoneNumber = phoneNumber => {
        phoneNumber = cleanInput(phoneNumber);
        setField("phoneNumber", phoneNumber);

        const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

        if(!phoneNumber) return "Ingresa un número de teléfono";
        else if(!regex.test(phoneNumber)) return "Ingresa un número de teléfono válido (123-123-1234)";
    }

    const validateEmail = email => {
        email = cleanInput(email);
        setField("email", email);

        if(!email) return "Ingresa un email";
        else if(email.length <= 2) return "Ingresa un email válido";;
    }

    const cleanInput = input => {
        const regex = /\s\s+/g;
        return regex.test(input) ? 
            input.replace(/\s\s+/g, ' ') : input
    }

    return (
        <Container id={s.BuySection}>
            <Row>

                <Col xs={12} sm={true}>
                    <p> Estás a punto de comprar: </p>
                </Col>

                <Col xs={12} sm={8}>
                    <Form id={s.BuyForm} noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="validationCustomUsername">
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                value={ form.name }
                                onChange={(e) => {
                                    setField('name', e.currentTarget.value)
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
                                value={ form.phoneNumber }
                                onChange={(e) => {
                                    setField('phoneNumber', e.currentTarget.value)
                                }}
                                isInvalid={ !!errors.phoneNumber }
                                isValid={ !!!errors.phoneNumber }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                               { errors.phoneNumber }
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationCustomEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Correo electrónico"
                                value={ form.email }
                                onChange={(e) => {
                                    setField('email', e.currentTarget.value)
                                }}
                                isInvalid={ !!errors.email }
                                isValid={ !!!errors.email }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                { errors.email }
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" className={button.Primary}>
                            Submit
                        </Button>
                    </Form>
                </Col>

                
            </Row>
        </Container>
    )
}
