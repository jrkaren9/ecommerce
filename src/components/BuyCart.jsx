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

    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");
    const { buyAll } = useContext(CartContext);

    const [ form, setForm ] = useState({});
    const [ errors, setErrors ] = useState({});

    const setField = (field, value) => {
        setForm({
          ...form,
          [field]: value
        })
      };

    const findFormErrors = () => {
        const { username } = form
        const newErrors = {}
        
        validatePhoneNumber(phoneNumber);

        const usernameValidated = validateUsername(username);
        if (usernameValidated) newErrors.username = usernameValidated;

        // if ( !food || food === '' ) newErrors.food = 'select a food!'
        // // rating errors
        // if ( !rating || rating > 5 || rating < 1 ) newErrors.rating = 'must assign a rating between 1 and 5!'
        // // comment errors
        // if ( !comment || comment === '' ) newErrors.comment = 'cannot be blank!'
        // else if ( comment.length > 100 ) newErrors.comment = 'comment is too long!'
    
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
          }        

        // sendOrder();
    };

    const sendOrder = () => {

        const order = {
            buyer: { name: "", phone: "", email: "" },
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

    const validateUsername = (username) => {
        const regex = /\s\s+/g;
        regex.test(username) ? 
            setField('username', username.replace(/\s\s+/g, ' ')) : 
            setField('username', username);

        if(!username) return "Please enter a username";
        else if(username.length <= 2) return "Name is too short";
        else if(username.length >= 20) return "Name is too long";
    }

    const validatePhoneNumber = phoneNumber => {
        const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        return regex.test(phoneNumber);
    }

    const validateEmail = email => {
        return email;
    }

    return (
        <Container id={s.BuySection}>
            <Row>

                <Col xs={12} sm={true}>
                    <p> Estás a punto de comprar: </p>
                </Col>

                <Col xs={12} sm={8}>
                    <Form id={s.BuyForm} noValidate onSubmit={handleSubmit}>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                value={form.username}
                                onChange={(e) => {
                                    setField('username', e.currentTarget.value)
                                }}
                                isValid={!errors.username}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                { errors.username }
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group as={Col} md="4" controlId="validationCustomPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => {
                                    setPhoneNumber(e.currentTarget.value)
                                }}
                                isValid={validatePhoneNumber}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid phone number.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustomEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.currentTarget.value)
                                }}
                                isInvalid={validateEmail}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid email.
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
