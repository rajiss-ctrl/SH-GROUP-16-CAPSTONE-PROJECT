import React from 'react';
import {Link} from 'react-router-dom';


function Contact(){
    return(
        <div>
            <nav>
                <button> <Link to ="/">Home</Link></button>
                <button> <Link to ="/about">About</Link></button>
                <button> <Link to ="/product">Product</Link></button>
                <button> <Link to ="/contact">Contact</Link></button>
            </nav>
            <h1> This is the Contact us page</h1>
        </div>
    )
}

export default Contact;