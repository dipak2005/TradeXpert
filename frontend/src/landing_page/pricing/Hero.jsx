import React from "react";
import '../OpenAccount.css';
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/signup")
  }
  return (
    <div className="container ">
      <div className="row p-5 mt-5 border-bottom" style={{ display: "block" }}>
        <h1 className="text-center ">Charges</h1>
        <p className="text-muted text-center">List of all charges and taxes</p>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-4">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h2>Free equity delivery</h2>
          <p className="text-muted fs-6">
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/intradayTrades.svg" alt="" />
          <h2>Intraday and F&O trades</h2>
          <p className="text-muted fs-6" style={{textAlign:"center"}}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h2 className="text-center" style={{fontWeight:"500"}}>Free direct MF</h2>
          <p className="text-muted fs-6">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>

      <div className='signup-section'>
            <h1 >Open a TradeXpert account</h1>
            <p className='text-center' style={{fontWeight:"500"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
             
             <button className='signup' style={{width:"230px"}} onClick={handleNavigate}>Sign up for free</button>
             
        </div>
    </div>
  );
}

export default Hero;
