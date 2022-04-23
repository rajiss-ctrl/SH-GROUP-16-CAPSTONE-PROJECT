import React from 'react';
import './button.css'


// This is the component to be used for the {Place Order} and {View Order} Buttons
export default function BigButton({props}) {
  return (
    <div>
        <button className="big-button">{props} </button>
    </div>
  );
}
