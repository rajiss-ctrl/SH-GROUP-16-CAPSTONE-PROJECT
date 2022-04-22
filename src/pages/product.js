import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import ProductNavbar from '../components/Navbar/ProductNavbar'
import Footer from '../components/Footer/Footer';
import ProductItem from '../components/ProductItem/ProductItem';
import ProductCard from '../components/ProductItem/ProductCard';
import '../App.css';


function Product(){
    return(
        <body>
            <Navbar/>
            <ProductNavbar/>
            <h1> This is the Product Page</h1>
            <div className="ProductList">
                {ProductItem.map((ProductItem) => {
                    return <ProductCard key={ProductItem.id}{...ProductItem}></ProductCard>
                })}
            </div>
            <Footer/>
        </body>
    )
}

export default Product;

