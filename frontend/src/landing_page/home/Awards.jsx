import React from "react";
import "./css/Awards.css";

function Awards() {
  return (
    <div className="container mb-5 p-3">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million TradeXpert Clients contribute to over 15% of <br /> all  over
            volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6 ">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Comodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. security</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="image" style={{padding:"0 0 0 190px"}}>
      <img src="media\images\pressLogos.png" alt="" />
      </div>
    </div>
  );
}

export default Awards;
