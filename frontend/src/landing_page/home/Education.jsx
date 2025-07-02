import React from 'react';
 import './css/Education.css';

function Education() {
    return ( 
        <div className="container ">
            <div className="row">
                <div className="col-6">
      <div className="market-edu-left">
        <img src="media/images/education.svg" alt="Varsity" className="edu-image" />
      </div>
      </div>
      <div className="col-6 p-5">
        <h2>Free and open market education</h2>
        <p >
          Varsity, the largest online stock market education book in the world
          covering everything from the basics to advanced trading.
        </p>

        <a href="#" >Varsity →</a>

        <p className='mt-3'>
          TradingQ&A, the most active trading and investment community in India
          for all your market related queries.
        </p>


        <a href="#" >TradingQ&A →</a>
      </div>
      </div>
    </div>
     );
}

export default Education;