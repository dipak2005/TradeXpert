import React,{useState} from 'react';
import "../signup/signup.css";

function NameInput() {
   const [name, setName] = useState("");
  return ( 
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
            placeholder="Enter your Name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
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
        </div>
   );
}

export default NameInput;