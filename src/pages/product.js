import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ProductNavbar from '../components/Navbar/ProductNavbar'
import Footer from '../components/Footer/Footer';


function Product(){
    return(
        <body>
            <Navbar/>
            <ProductNavbar/>
            <h1> This is the Product Page</h1>

            <Footer/>
        </body>
    )
}

export default Product;