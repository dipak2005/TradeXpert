import React from "react";
import "../landing_page/Navbar.css";
import { Link } from "react-router-dom";
import { useState ,useRef } from "react";
import { useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const popRef =  useRef(null);
useEffect(() => {
  const handleOutSideClick = (event) => {
    if (popRef.current && !popRef.current.contains(event.target)) {
       setMenuOpen(false);
    }
  }

  document.addEventListener("mousedown",handleOutSideClick);
  return () => {
    document.removeEventListener("mousedown",handleOutSideClick);
  }
})
  
  return (
    <div className="nav-main">
      <div className="container-fluid">
        <Link to="/">
          <img
            src="media/images/t3.png"
            alt=""
            style={{
              width: "350px",
              height: "50px",
              padding: "3px 0 3px 200px",
            }}
          />
        </Link>
      </div>
      <div className="navbar-button ms-auto">
        <div className="nav-links ">
          <Link to="/signup">Signup</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Products</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/support">Support</Link>
          <Link className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </Link>

          {menuOpen && (
            <div className="popup-menu" ref={popRef}>
              <a href="https://dashboard-ef9y.onrender.com" target="_black" rel="noopener noreferrer">
              <div className="product">
                <img src="media/images/1.png" alt="Kite" />
                <p className="text-muted" style={{ fontWeight: 600 }}>
                  Kite
                </p>
                <p
                  className="text-muted"
                  style={{ fontSize: "12px", color: "#777" }}
                >
                  Trading platform
                </p>
              </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
