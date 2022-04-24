import React from 'react';
import { data } from '../components/data';
import "./css/product.css";

const Product = () => {
    return (
        <>
            <div className="product-container">
                <h1>Products</h1>
                <div className="product-wrapper">
                    {
                        data.map((item) => (
                            <div className="product-card" key={item.id}>
                                <div className="img-bg">
                                    <img width="205px" height="160px" src={item.src} alt={item.title} />
                                </div>
                                <div className="content">
                                    <h5>{item.title}</h5>
                                    <p>{item.price}</p>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Product;