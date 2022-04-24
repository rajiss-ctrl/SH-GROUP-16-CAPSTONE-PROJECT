import React from 'react'
import '../App.css';

import Navbar from '../../components/Navbar/Navbar';
import ProductNavbar from '../../components/Navbar/ProductNavbar'
import Footer from '../../components/Footer/Footer';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductCard from '../../components/ProductItem/ProductCard';


const Product = () => {

const foods = [
    {id: 1, foodname: 'Fried rice', image: food11.png, price:'$10'},
    {id: 2, foodname: 'Eba', image: food1.png, price:'$12'},
    {id: 3, foodname: 'Party Jollof', image: food2.png, price:'$11'},
    {id: 4, foodname: 'Assorted Meat', image: food3.png, price:'$5'},
    {id: 5, foodname: 'Yam & Egg Sauce', image: food3b.png, price:'$12'},
    {id: 6, foodname: 'Rice & Sauce', image: food4.png, price:'$10'},
    {id: 7, foodname: 'Spaghetti', image: food4b.png, price:'$8'},
    {id: 8, foodname: 'French Fries', image: food5.png, price: '$9'},
    {id: 9, foodname: 'Mac&Cheese', image: food5b.png, price: '$5'},
    // {id: 10, foodname: 'fried rice', image: friedRice, price: '$10'},
    // {id: 11, foodname: 'fried rice', image: friedRice, price: '$10'},
    // {id: 12, foodname: 'fried rice', image: friedRice, price: '$10'},
    // {id: 13, foodname: 'fried rice', image: friedRice, price: '$10'},
    // {id: 14, foodname: 'fried rice', image: friedRice, price: '$10'},
    // {id: 15, foodname: 'fried rice', image: friedRice, price: '$10'},
    // {id: 16, foodname: 'fried rice', image: friedRice, price: '$10'},
    // 
]

function Product(){
    return(
        <body>
            <Navbar/>
            <ProductNavbar/>
            <h1> Welcome to our food court</h1>
            <p>Please Select from our Available Menu</p>

            <div className="ProductList">
                {
                ProductItems && ProductItems.map((ProductItem)=> 
                  <div calssName='ProductItems'>
                      <div>
                          <img src={food.image} alt="foodImage" />
                      </div>
                      <p>{food.foodname}</p>
                      <p>{food.price}</p>
                  </div>
                )
                }
            </div>
            <Footer/>
        </body>
    )
}

export default Product;

