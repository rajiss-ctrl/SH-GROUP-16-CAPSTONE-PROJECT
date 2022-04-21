import React from 'react';
import {Link} from 'react-router-dom';


function About(){
    return(
        <div>
            <h1> This is the About Page </h1>
            <nav>
                <button> <Link to ="/">Home</Link></button>
                <button> <Link to ="/about">About</Link></button>
                <button> <Link to ="/product">Product</Link></button>
                <button> <Link to ="/contact">Contact</Link></button>
            </nav>
        </div>
    )
}

export default About;