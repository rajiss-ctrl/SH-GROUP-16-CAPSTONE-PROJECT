import React from 'react';
import BigButton from '../components/Buttons/BigButton';
import Food1 from '../Images/headingIMG.png';
import './css/Home.css';
function Home() {
    return (
        <div className='container'>
            <header>
                <div className='heading-wrapper'>
                    <div className='content-heading'>
                        <h2>Order for Tasty, Spicy and Fresh Food</h2>
                        <p>from the comfort of your home</p>
                        <div className="home-btn">
                            <BigButton props={"Place Order"} />
                        </div>

                    </div>

                
                  <img src={Food1} alt='food' />
            
                </div>               
            </header>
            <div>
           {/* <Footer/> */}
           </div>
        </div>

            
           
    )
}

export default Home;