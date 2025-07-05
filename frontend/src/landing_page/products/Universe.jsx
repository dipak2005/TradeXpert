import React from 'react';
import './css/Universe.css';
import { useNavigate } from 'react-router-dom';

function Universe() {
  const naviagte = useNavigate();

  const handleNavigate = () => {
    naviagte("/signup");
  }

     const platforms = [
    {
      name: 'TradeXpert Fund House',
      description: 'Our asset management venture that is creating simple and transparent index funds to help you save for your goals.',
      icon: 'media/images/t3.png', 
    },
    {
      name: 'Sensibull',
      description: 'Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.',
      icon: 'media/images/sensibullLogo.svg', 
    },
    {
      name: 'Tijori',
      description: 'Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.',
      icon: 'https://zerodha.com/static/images/partners/tijori.svg', 
    },
    {
      name: 'Streak',
      description: 'Systematic trading platform that allows you to create and backtest strategies without coding.',
      icon: 'media/images/streakLogo.png', 
    },
    {
      name: 'Smallcase',
      description: 'Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.',
      icon: 'media/images/smallcaseLogo.png', 
    },
    {
      name: 'Ditto',
      description: 'Personalized advice on life and health insurance. No spam and no mis-selling.',
      icon: 'media/images/dittoLogo.png', 
    },
  ];

    return ( 
        <div className="container-wrapper">
        <div className="main-container">
         
          <h1 className="main-heading">
            The TradeXpert Universe
          </h1>

          
          <p className="sub-heading">
            Extend your trading and investment experience even further with our partner platforms
          </p>

          
          <div className="platforms-grid">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="platform-card"
              >
               
                <div className="icon-placeholder">
                 
                  <img src={platform.icon} style={{height:"40px", width:"100px"}} alt="" />
                </div>

                
                <h3 className="platform-name">
                  {platform.name}
                </h3>

                
                <p className="platform-description">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>

         
          <button className="signup-button" onClick={handleNavigate}>
            Sign up for free
          </button>
        </div>
      </div>
     );
}

export default Universe;