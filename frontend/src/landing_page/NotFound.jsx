import React from "react";
import '../landing_page/NotFound.css';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-section">
      <h1>404 Not Found!</h1>
      <p className="text-center">
        We couldn’t find the page you were looking for 😔.
        {/* <Link to="/" style={{ color: "#1f64c5" }}>
          TradeXpert’s home
        </Link> */}
      </p>

      <Link className="back" to="/">Visit Home</Link>
    </div>
  );
}

export default NotFound;
