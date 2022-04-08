import React, { useState } from 'react';
import s from './ItemCount.module.css'

export default  function ItemCount({ stock }) {

    const [count, setCount] = useState(0);
  
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

    const onAdd = () => {
        alert('Agregaste ' + count + ' productos a tu carrito');
    };

    return (
        <>
        <div className={"row col-6 mb-3 justify-content-center"}>
            <button type="button" 
                className={s.buttonCount + " d-flex align-items-center justify-content-center col-1"} 
                onClick={substract}>
                -
            </button>
            <input id={s.numberInput} type="number" min="0" value={count} className="col-2" onChange={e => validateCount(e.target.value)}/>
            <button type="button" 
                className={s.buttonCount + " d-flex align-items-center justify-content-center outline-white col-1"} 
                onClick={add}>
                +
            </button>
            <button type="button" 
                className={"d-flex align-items-center justify-content-center col-2"}
                onClick={onAdd}>
                    Comprar
            </button>
        </div>
        </>
    );
}