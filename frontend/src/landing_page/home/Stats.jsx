import React from "react";
import "./css/Stats.css";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h2 className="h2">Trust with confidence</h2>
          <br />
          <br />
          <h3 className="h3 mb-3">Customer-first always</h3>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h3 className="h3 mb-3">No spam or gimmicks</h3>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <span>
              <a href="">Our philosophies.</a>
            </span>
          </p>

          <h3 className="h3 mb-3">The TradeXpert universe</h3>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h3 className="h3 mb-3">Do better with money</h3>
          <p className="text-muted">
            With initiatives like{" "}
            <span>
              <a href="#">Nudge</a>{" "}
            </span>{" "}
            and{" "}
            <span>
              <a href="#">Kill Switch</a>
            </span>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            
            style={{ width: "99%" }}
            alt=""
          />
          <div>
            <a href="#" className=" mx-5">
              Explore our products →
            </a>
            <a href="#">
              Try Kite demo →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
