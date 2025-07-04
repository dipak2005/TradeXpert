import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const MobileInput = () => {
  const [email, setEmail] = useState("");

  return (
    <div style={{ width: "320px", margin: "30px 30px 30px 0" }}>
      {/* <PhoneInput
        country={'in'}
        value={phone}
        onChange={phone => setPhone(phone)}
        inputStyle={{
          width: '100%',
          height: '60px',
          fontSize: '16px'
          ,outline:"none",
          boxShadow:"none" ,
          color:"gray" 
        }}
        placeholder="Enter your mobile number"
      /> */}

      {/* <fieldset> */}
      <div style={{ position: "relative", width: "100%", }}>
        <span
          className="icon"
          style={{
            position: "absolute",
            top: "50%",
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
        {/* </fieldset> */}
      </div>
    </div>
  );
};

export default MobileInput;
