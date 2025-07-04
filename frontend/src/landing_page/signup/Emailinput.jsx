import React, { useState } from "react";
import axios from "axios";
import "../signup/signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Emailinput = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const baseUrl = "https://backend-4u6j.onrender.com";
  const sendOtp = async () => {
    try {
      await axios.post(`${baseUrl}/send-otp`, { email } ,{withCredentials:true});
      alert("OTP sent to email");
      setStep(2);
    } catch (e) {
      alert("Error sending OTP");
    }
  };

  const verifyOTP = async () => {
    try {
      const res = await axios.post(`${baseUrl}/verify-otp`, {
        email,
        otp: otp.toString(),
      }, {
        withCredentials:true
      }
    );
      
      navigate("https://dashboard-ef9y.onrender.com");
    } catch (e) {
      alert("Invalid OTP");
    }
  };

  return (
    <div style={{ width: "320px", margin: "30px 30px 30px 0" }}>
      {step == 1 ? (
        <div style={{ position: "relative", width: "100%" }}>
          <span
            className="icon"
            style={{
              position: "absolute",
              top: "23%",
              left: "15px",
              transform: "translateY(-50%)",
              fontSize: "20px",
              pointerEvents: "none",
              color: "gray",
            }}
          >
            📩
          </span>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              height: "60px",
              alignItems: "center",
              fontSize: "16px",
              outline: "none",
              border: "1px  solid #d1d1d1",
              // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              color: "gray",
              paddingLeft: "45px",
              borderRadius: "5px",
            }}
          />

          <button className="signup px-3 mt-3" onClick={sendOtp}>
            Get OTP
          </button>
          {/* </fieldset> */}
        </div>
      ) : (
        <div style={{ position: "relative", width: "100%" }}>
          <span
            className="icon"
            style={{
              position: "absolute",
              top: "23%",
              left: "15px",
              transform: "translateY(-50%)",
              fontSize: "20px",
              pointerEvents: "none",
              color: "gray",
            }}
          >
            🗝️
          </span>
          <input
            type="text"
            placeholder="000-000"
            value={otp}
            name="otp"
            onChange={(e) => setOtp(e.target.value)}
            style={{
              width: "100%",
              height: "60px",
              alignItems: "center",
              fontSize: "16px",
              outline: "none",
              border: "1px  solid #d1d1d1",
              // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              color: "gray",
              paddingLeft: "45px",
              borderRadius: "5px",
            }}
          />
          {/* </fieldset> */}


             
          <button className="signup px-3 mt-3" onClick={verifyOTP} >Verify OTP
          </button>
          
        </div>
      )}
    </div>
  );
};

export default Emailinput;
