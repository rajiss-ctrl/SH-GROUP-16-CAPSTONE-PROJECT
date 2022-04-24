import React from 'react';
import './Button.css'

// This is the button component to be used for the {Order Button} on the Homepage and {Add to Cart} on the product Page
export default function OrderButton({props}) {
  return (
    <div>
      <button className="order-button"> {props} </button>
    </div>
  );
}
