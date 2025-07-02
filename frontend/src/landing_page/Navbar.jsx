import React from "react";
import "../landing_page/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
      <div className="nav-main">
  <div className="container-fluid">
    <Link to="/"><img src="media/images/t3.png" alt="" style={{width:"350px", height:"50px" , padding:"3px 0 3px 200px"}}/></Link>
   
   
    
  </div>
   <div className="navbar-button ms-auto">
    <div className="nav-links ">
        <Link to="/signup">Signup</Link>
         <Link  to  ="/about">About</Link>
          <Link  to  ="/product">Products</Link>
           <Link  to  ="/pricing">Pricing</Link>
            <Link  to  ="/support">Support</Link>
            <Link className="menu-icon" to="">&#9776;</Link>
            </div>
    </div>
</div>
   
  );
}

export default Navbar;
