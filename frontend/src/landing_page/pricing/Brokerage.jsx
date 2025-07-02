import React from "react";
import '../pricing/Brokerage.css';

function Brokerage() {
  return (
    <div className="container">
      <div className="row mt-5 p-5 text-center border-top">
        <div className="col-8 p-5">
          <a href="">
            <h3 className="text-center fs-5 mb-5" style={{ fontWeight: "500" }}>
              Brokerage Calculator
            </h3>
          </a>

          <ul className="text-muted fs-10 text-start">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes , if required, shall be charged
              ₹20 per contract note. Courier cgarges apply.
            </li>
            <li>
              For NRI account (non-PIS),0.5% ₹100 per executed order for equity
              (whichever is lower).
            </li>

            <li>
              For NRI account (non-PIS),0.5% ₹200 per executed order for equity
              (whichever is lower).
            </li>

            <li>
              if the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="">
            <h3 className="text-center fs-5" style={{ fontWeight: "500" }}>
              List of charges
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
