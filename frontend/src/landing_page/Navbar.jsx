import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../landing_page/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const popRef = useRef(null);
  const navigate = useNavigate();

  const isLogUser = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/check`, {
        withCredentials: true,
      });

      if (res.data.loggedIn) {
        // ✅ User is verified, open dashboard
        window.open(`${import.meta.env.VITE_DASHBOARD_BASE_URL}`, "_blank");
      } else {
        // 🚫 Not verified, redirect to signup
        
        navigate("/signup");
        toast.info("Please complete verification first.");
      }
    } catch (err) {
     
      navigate("/signup");
       toast.error("Unable to verify session.");
    }
  };

  // Close menu on outside click
  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (popRef.current && !popRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);

  return (
    <div className="nav-main">
      <div className="container-fluid">
        <a href="/">
          <img
            src="media/images/t3.png"
            alt="Logo"
            style={{
              width: "350px",
              height: "50px",
              padding: "3px 0 3px 200px",
            }}
          />
        </a>
      </div>

      <div className="navbar-button ms-auto">
        <div className="nav-links">
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
              <div className="product">
                <img
                  style={{ cursor: "pointer" }}
                  src="media/images/1.png"
                  alt="Kite"
                  onClick={isLogUser}
                />
                <p className="text-muted" style={{ fontWeight: 600 }}>
                  Kite
                </p>
                <p className="text-muted" style={{ fontSize: "12px" }}>
                  Trading platform
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
