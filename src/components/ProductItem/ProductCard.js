import React from 'react';
import OrderButton from '../Buttons/OrderButton';
import './ProductItem.css';

export default function ProductCard({img, itemName, price}) {
  return (
    <div className="product-card">
        <div className="Image">
            <img src={img} alt="ProductImage" />
        </div>

        <div className="product-card-detail">
                <div className="ItemName">{itemName}</div>
                <div className="Price">{price}</div>
                <OrderButton props={"Add to Cart"} className="Add-to-cart"/>
        </div>
        
    </div>
  )
}

