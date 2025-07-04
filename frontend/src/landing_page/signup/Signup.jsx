import React, { useState  } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Emailinput from "./Emailinput";
import "../signup/signup.css";
import OpenAccount from "../OpenAccount";
import NameInput from "./nameInput";

function Signup() {
  return (
    <div className="container p-5 ">
      <div className="row d-block">
        <h1
          className="text-center mt-5"
          style={{ fontSize: "46px", fontWeight: "500", color: "#424242" }}
        >
          Open a free demat and trading account online
        </h1>
        <p className="text-muted text-center mt-3">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      <div className="row mt-5 ">
        <div className="col-6 p-5">
          <img src="media/images/account_open.svg" alt="" />
        </div>
        <div className="col-6 p-5">
          <h2 className="mt-3" style={{ fontSize: "35px", fontWeight: "500" }}>
            Signup now
          </h2>
          <p style={{ color: "grey", fontSize: "16px" }}>
            {" "}
            Or track your existing application
          </p>
          <NameInput />
          <Emailinput />
          
           <div
            className="google mt-3"
            style={{
              // border: "1px solid #d1d1d1",
              borderRadius: "100%",
              width: "70px",
              height: "70px",
              overflow: "hidden",
            }}
          >
            <Link >
            <img
              src="media/images/g.jpg"
              alt=""
              style={{
                margin: "5px",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                paddingBottom:"10px",
                paddingRight:'10px'
              }}
            /></Link>
          </div>
        </div>
      </div>
      <OpenAccount />
    </div>
  );
}

export default Signup;
