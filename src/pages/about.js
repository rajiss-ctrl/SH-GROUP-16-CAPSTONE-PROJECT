import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/navbar";
import AboutImg from "./Product/Images/food2.png";
import "./css/About.css";

function About() {
  return (
    <body>
      <Navbar />
      <div className="about-container">
        <div className="content">
          <h2> About Us</h2>
          <img src={AboutImg} alt="" classname="" />
        </div>
        <div className="text">
          <p>
            FoodieZone is a Restauratant that is situated at the hear of Lagos.
            It is well knows for its tasty, spicy and <br />
            fresh food.
          </p>
          <br />
          <p>
            Customers within the <br />
            state can place orders <br />
            for meals and have it <br />
            delivered within 50 <br />
            minutes-depending on the location
          </p>
        </div>
      </div>

      <Footer />
    </body>
  );
}

export default About;
