import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import s from './ItemCount.module.css'

export default  function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial);
    let btnDisabled = stock <= 0 ? true : false
  
    const add = () => {
        if(count < stock)
            setCount(count + 1);      
    };

    const substract = () => {
        if(count > 0)
            setCount(count - 1);  
    };

    const validateCount = (value) => {
        if(value < 0){
            setCount(0);
        }
        else if(value > stock){
            setCount(count);
        }
        else if(value.isNaN){
            setCount(stock);
        }
        else {
            setCount(parseInt(value));
        }
            
    };

    return (
        <>
        <Row xs={12} className="justify-content-center">
            <button type="button" 
                className={s.buttonCount + " d-flex align-items-center justify-content-center col-2"} 
                disabled={btnDisabled} onClick={substract}>
                -
            </button>
            <input id={s.numberInput} type="number" min="0" value={count} 
                className="col-5" onChange={e => validateCount(e.target.value)} disabled={btnDisabled}/>
            <button type="button" 
                className={s.buttonCount + " d-flex align-items-center justify-content-center outline-white col-2"} 
                disabled={btnDisabled} onClick={add}>
                +
            </button>
        </Row>

        <Row xs={12} className="justify-content-center">
            <button type="button" 
                className="d-flex align-items-center justify-content-center col-7"
                disabled={btnDisabled} onClick={() => onAdd(count)}>
                    Agregar al carrito
            </button>
        </Row>

        </>
    );
}