import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5">
        <h2 className="fs-4 text-center p-5">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h2>
      </div>
      <hr />

      <div className="row p-5">
        <div className="col-5 " >
          <p className="text-muted">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p className="text-muted">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p className="text-muted">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-5 pr-5">
           <p className="text-muted">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

           <p className="text-muted">
            <span><a href="#">Rainmatter</a></span>, our fintech fund and incubator, has
            invested in several fintech startups with the goal of growing the
            Indian capital markets.
          </p>

          <p className="text-muted">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <span><a href="#">blog</a></span>
            or see what the media is <span><a href="#">saying about us</a></span> or learn
            more about our business and product <span><a href="#">philosophies.</a></span>
          </p> 
        </div>
      </div>
    </div>
  );
}

export default Hero;
