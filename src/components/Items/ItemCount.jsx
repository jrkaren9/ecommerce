import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s from './ItemCount.module.css'
import button from '../Buttons.module.css';
import Button from 'react-bootstrap/Button';

export default function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial);
    const [disableAdd, setDisableAdd] = useState(false);

    useEffect(() => {
        count <= 0 ? setDisableAdd(true) : setDisableAdd(false);
        count > stock ? setCount(stock) : setCount(count);
    }, [count, stock])

    let btnDisabled = stock <= 0

    const add = () => {
        if(count < stock)
            setCount(count + 1);      
    };

    const substract = () => {
        if(count > 0)
            setCount(count - 1);  
    };

    return (
        <>
        <Row className="justify-content-center">
            <Col xs={8} md={6} className={s.NoPadding + " d-flex justify-content-center"} >
                <button type="button" 
                    className={s.buttonCount + " d-flex align-items-center justify-content-center col-2"} 
                    disabled={btnDisabled} onClick={substract}>
                    -
                </button>
                <input id={s.numberInput} type="number" min="0" value={count} 
                    className="col-8" disabled/>
                <button type="button" 
                    className={s.buttonCount + " d-flex align-items-center justify-content-center outline-white col-2"} 
                    disabled={btnDisabled} onClick={add}>
                    +
                </button>
            </Col>
        </Row>

        <Row className="justify-content-center">
            <Col className={s.NoPadding + " " + s.AfterCount + " d-flex justify-content-center"}>
                {btnDisabled ? 
                    (<p>Lo sentimos, por ahora no hay más stock</p>) :
                    (<Button type="button" 
                        className={button.Primary + " d-flex align-items-center justify-content-center"}
                        disabled={disableAdd} onClick={() => onAdd(count)}>
                            Agregar al carrito
                    </Button>)
                }
            </Col>       
        </Row>

        </>
    );
}