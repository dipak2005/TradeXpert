import React from "react";
import "./css/Pricing.css";

const features = [
  {
    image: 'media/images/price.svg',
    text: ['Free account', 'opening']
  },
  {
    image: 'media/images/price.svg',
    text: ['Free equity delivery', 'and direct mutual funds']
  },
  {
    image: 'media/images/20.svg',
    text: ['Intraday and', 'F&O']
  }
];

function Pricing() {
  return (
    <div className="container ">
      <div className="row p-">
        <div className="col-5 p-5 ">
          <h2>Unbeatable pricing</h2>
          <br />
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-6">
          <div className="pricing-container">
      {features.map((item, index) => (
        <div className="pricing-box" key={index}>
          <div className="price-icon">
            <span className="rupee-symbol">₹</span>
            <span className="amount"><img src={item.image} alt=""  style={{width:"100px"}}/></span>
           
          </div>
          <div className="price-text">
            {item.text.map((line, i) => (
              <div key={i} >{line}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
      
    </div>
  );
}

export default Pricing;
