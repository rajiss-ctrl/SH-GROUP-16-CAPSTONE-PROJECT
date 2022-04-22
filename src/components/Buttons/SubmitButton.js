import React from 'react';
import './Button.css'

// This is the Submit Button for the Forms

export default function SubmitButton({props}) {
  return (
    <div>
        <button className="submit-button">{props} </button>
    </div>
  );
}
