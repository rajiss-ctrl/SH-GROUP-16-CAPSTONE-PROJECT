import React from 'react';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='Navbar'>
            <nav className="Navbar-links">
                <Link to='/' className="logo">
                    <img src='FoodieZonelogo.png' alt='FoodieZone' />
                </Link>
                <ul>
                    <li> <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/">Home</NavLink></li>
                    <li> <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/about">About</NavLink></li>
                    <li> <Link to="/product">Product</Link></li>
                    <li> <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
