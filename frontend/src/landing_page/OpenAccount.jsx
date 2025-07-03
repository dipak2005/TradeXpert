import React from 'react';
import '../landing_page/OpenAccount.css';


function OpenAccount() {
    return (  
        <div className='signup-section'>
            <h1 >Open a TradeXpert account</h1>
            <p className='text-center'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
             
             <button className='signup' style={{width:"230px"}}>Sign up for free</button>
             
        </div>
    );
}

export default OpenAccount;