import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <div className='subtotal' >
      <h3>Your Subtotal</h3>
      <CurrencyFormat 
        renderText={(value) => (
            <>
                <p>Subtotal (0 items): <strong>0</strong> </p>  
                <small className='subtotal__gift' >
                    <input type='checkbox' />
                    This Order Contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button>Proceed to CheckOut</button>
    </div>
  )
}

export default Subtotal
