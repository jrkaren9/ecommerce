import React, { useState } from 'react';

export default  function ItemCount() {

    const [count, setCount] = useState(0);
  
    const changeCounter = (action) => {
        action === 'plus' ?
            setCount(count + 1) :
            count === 0 ? setCount(0) : setCount(count - 1);
    };

    const validateCount = (value) => {
        value < 0 ? setCount(0) : setCount(value);
    }

    return (
        <>
        <div className="row mb-3 justify-content-center">
            <button type="button" 
                className="button-count d-flex align-items-center justify-content-center col-1" 
                onClick={() => changeCounter('minus')}>
                -
            </button>
            <input id="number-input" type="number" min="0" value={count} className="col-4" onChange={e => validateCount(e.target.value)}/>
            <button type="button" 
                className="button-count d-flex align-items-center justify-content-center outline-white col-1"
                onClick={() => changeCounter('plus')}>
                +
            </button>
        </div>
        </>
    );
}