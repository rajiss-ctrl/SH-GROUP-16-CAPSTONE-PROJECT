import React from 'react';
import aboutImg from "../Images/about-food.png";
import "./css/about.css";


function About() {
    return (
        <div>
            <div className='about-container'>
                <div className="img-parent">
                    <h2> About Us</h2>
                    <img src={aboutImg} alt='' className='food-img' />
                </div>
                <div className='about-content'>
                    <p>
                        FoodieZone is a Restauratant that is situated at the heart of Lagos. It is well known for its tasty,spicy and fresh food. <br /><br />
                        Customers within the state can place orders for meals and have it delivered within 50 minutes-depending on the location
                    </p>
                </div>
            </div>
        </div>

    );
}

export default About;



