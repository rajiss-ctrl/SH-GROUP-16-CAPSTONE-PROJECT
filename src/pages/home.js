import React from 'react';
import Navbar from '../components/Navbar/navbar';
import BigButton from '../components/Buttons/BigButton';
import Footer from '../components/Footer/Footer'

function Home(){
    return(
        <div>
            <Navbar />

            <div className='content'>
               <div>
                  <img src='' alt='' classname='' />
               </div>
               <div className='fa content'>
                 <h2>Order for Tasty, Spicy and Fresh Food</h2>
                 <p>from the comfort of your home</p>
               </div>

               <BigButton props ={"Place Order"} />
            </div>

            <Footer/>
           
        </div>
    )
}

export default Home;