import React from "react";
import "../landing_page/Navbar.css";
import { Link } from "react-router-dom";
import { useState ,useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const popRef =  useRef(null);

 const navigate = useNavigate();
 const isLogUser =  async ()=> {
      await axios.get("https://backend-4u6j.onrender.com/auth/check", {
         withCredentials:true,
       }).then((res)=> {
         if (!res.data.loggedIn) {
          navigate("https://tradexpert-ku2t.onrender.com/signup",{replace:true});
         }
       }).catch(()=> {
          navigate("https://dashboard-ef9y.onrender.com",{replace:true});
       });
  };


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
        <a href="/">
          <img
            src="media/images/t3.png"
            alt=""
            style={{
              width: "350px",
              height: "50px",
              padding: "3px 0 3px 200px",
            }}
          />
        </a>
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
              
              <div className="product">
                <img src="media/images/1.png" alt="Kite" onClick={isLogUser} />
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
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
