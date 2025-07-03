import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const MobileInput = () => {
  const [phone, setPhone] = useState("");

  return (
    <div style={{ width: "320px", margin: "30px 30px 30px 0",  }}>
      <PhoneInput
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
      />
    </div>
  );
};

export default MobileInput;
