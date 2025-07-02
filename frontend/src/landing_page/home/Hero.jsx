import React from 'react';
import './css/Hero.css';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
             <div className='row '>
               <div className="hero ">
                <img src="media/images/homeHero.png" alt="Hero Image" style={{width:"90%",padding:"0 0 0 170px"}}/>
                <div className="text-center">
                <h1 className='mt-5'>Invest in everything</h1>
                <p className='text-center'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='signup ' >Sign up for free</button>
                </div>
                </div>
             </div>
        </div>
     );
}

export default Hero;