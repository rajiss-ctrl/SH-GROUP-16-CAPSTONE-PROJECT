import React from 'react';
import './Navbar.css'

// This is the component to be used for the {ProductNavbar} on the Product page
export default function ProductNavbar() {
  return (
    <div className="product-nav">
        <ul>
            <li> All </li>
            <li> Local Dish </li>
            <li> Rice </li>
            <li> Soup </li>
            <li> Snacks </li>
            <li> Chinese Food </li>
            <li> Smoothies </li>

        </ul>
    </div>
  );
}
