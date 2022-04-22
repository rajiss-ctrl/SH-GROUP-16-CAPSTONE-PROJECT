import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className='Navbar'>
            
            <nav className="Navbar-links">
                <div className="logo">
                     <img src='FoodieZonelogo.png' alt='FoodieZone' />
                </div>
                <ul>
                    <li> <Link to ="/">Home</Link></li>
                    <li> <Link to ="/about">About</Link></li>
                    <li> <Link to ="/product">Product</Link></li>
                    <li> <Link to ="/contact">Contact</Link></li>
                </ul>
            </nav> 
        </div>
    )
}

export default Navbar
