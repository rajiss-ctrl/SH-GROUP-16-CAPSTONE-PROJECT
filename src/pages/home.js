import React from 'react';
import Navbar from '../components/Navbar/navbar';

function Home(){
    return(
        <div>
           <div>
              <Navbar />
           </div>
           <div className='content'>
               <div>
                  <img src='' alt='' classname='' />
               </div>
               <div className='fa content'>
                 <h2>Order for Tasty, Spicy and Fresh Food</h2>
                 <p>from the comfort of your home</p>
               </div>
           </div>
           <button>Place Order</button>
        </div>
    )
}

export default Home;