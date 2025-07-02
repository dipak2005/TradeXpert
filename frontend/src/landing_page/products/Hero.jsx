import React from "react";
import "./css/Hero.css";

function Hero() {
  return (
    <div className="container p-5">
      <div className="hero p-5">
        <h1 className="text-center  mt-3" >TradeXpert Products</h1>
        <p className="text-center text-muted mt-3">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="text-center mt-3 link">
          Check out our <a href="#">investment offering →</a>
        </p>
      </div>
      <hr />
    </div>
  );
}

export default Hero;
