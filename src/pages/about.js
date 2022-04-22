import React from 'react';
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar';


function About(){
    return(
        <body>
               <Navbar /> 
               <div className='content'>
                <div>
                    <h2> About Us</h2>
                    <img src='' alt='' classname='' />
                </div>

                <div className='fa content'>
                    <p>FoodieZone is a Restauratant that is situated at the heart of Lagos. It is well knows for its tasty,spicy and fresh food. <br />
                        Customers within the state can place orders for meals and have it delivered within 50 minutes-depending on the location</p>
                </div>
                </div>
        <Footer/>
        </body>
            
    )
}

export default About;