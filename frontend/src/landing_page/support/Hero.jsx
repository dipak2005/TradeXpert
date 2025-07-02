import React from 'react';
import '../support/Hero.css';
function Hero() {
    return ( 
       <div class="support-portal ">
  <div class="left-section mb-5">
    <h2 className='mb-3 fs-6'>Support Portal</h2>
    <p className='fs-4'>Search for an answer or browse help topics to create a ticket</p>
    
    <div class="search-box">
      <input type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." />
      <span class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
    </div>

    <div class="quick-links">
      <a href="#">Track account opening</a>
      <a href="#">Track segment activation</a>
      <a href="#">Intraday margins</a>
      <a href="#">Kite user manual</a>
    </div>
  </div>

  <div class="right-section p-5">
    <a class="track-tickets" href="#" style={{textDecoration:"none"}}>Track tickets</a>
    <h3 className='mt-5'>Featured</h3>
    <ol>
      <li><a href="#">Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
      <li><a href="#">Revision in expiry day of Index and Stock derivatives contracts</a></li>
    </ol>
  </div>
</div>

     );
}

export default Hero;