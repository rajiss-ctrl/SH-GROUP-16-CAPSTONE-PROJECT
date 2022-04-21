import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div>
            <nav>
                <ul>
                    <li> <Link to ="/">Home</Link></li>
                    <li> <Link to ="/about">About</Link></li>
                    <li> <Link to ="/product">Product</Link></li>
                    <li> <Link to ="/contact">Contact</Link></li>
                </ul>
            </nav>
            <h1> This is the HomePage</h1>
        </div>
    )
}

export default Home;