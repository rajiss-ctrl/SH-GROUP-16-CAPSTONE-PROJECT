import React from 'react';
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';







function Navbar() {
    const[open, setOpen] = useState(false);
    

    const handleClick = ()=>{
       setOpen(!open)
       console.log("i am clicked") 
    }
   
    return (
        <div className='Navbar'>
            <nav className="Navbar-links">
                <Link to='/' className="logo">
                    <img src='FoodieZonelogo.png' alt='FoodieZone' />
                </Link>
                <ul  className={open  ? "expanded": "barMenu"} >
                    <li> <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/">Home</NavLink></li>
                    <li> <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/about">About</NavLink></li>
                    <li> <Link to="/product">Product</Link></li>
                    <li> <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/contact">Contact</NavLink></li>
                </ul>
                <div  className='bar'>
                    <FontAwesomeIcon icon={faTimes} className="faBars"
                    style={{display: open ? "block" : "none"}}
                    onClick={handleClick}
                    ></FontAwesomeIcon>:
            
                    <FontAwesomeIcon icon={faBars} className="faBars"
                         style={{display: !open ? "block" : "none"}}
                     onClick={handleClick}
                    ></FontAwesomeIcon>  
                </div>
                
            </nav>
        </div>
    );
}

export default Navbar;
