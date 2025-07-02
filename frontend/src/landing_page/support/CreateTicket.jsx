import React from "react";
import "../support/CreateTicket.css";

function CreateTicket() {
  return (
    <div className="container p-5">
      
        <h4 className="text-muted mb-5 mt-3 title">
          To create a ticket, select a relevant topic
        </h4>
      

      <div className="row p-3">
        <div className="col-4 p-3">
          <h5 style={{ fontWeight: "400" }} className="heading">
            <i class="fa-solid fa-circle-plus "></i> &nbsp; &nbsp;Account Opening
          </h5>
          
          <a href="">Resident individual</a><br />
          <a href="">Minor</a><br />
          <a href="">Non Resident Indian (NRI)</a><br />
          <a href="">Company, Partnership, HUF and LLP</a><br />
          <a href="">Glossary</a>
        
</div>
         <div className="col-4 p-2">
          <h5 style={{ fontWeight: "400" }} className="heading">
            <i class="fa-solid fa-user"></i> &nbsp; &nbsp;Your TradeXpert Account
          </h5>
          
         
          <a href="">Your Profile</a><br />
          <a href="">Account modification</a><br />
          <a href="">Client Master Report (CMR) and Depository Participant (DP)</a><br />
          <a href="">Nomination</a><br />
          <a href="">Transfer and conversion of securities</a>
        </div>
        <div className="col-4 p-2">
          <h5 style={{ fontWeight: "400" }} className="heading">
            <i class="fa-solid fa-chart-simple"></i> &nbsp; &nbsp;Kite
          </h5>
          
          <a href="">IPO</a><br />
          <a href="">Trading FAQs</a><br />
          <a href="">Margin Trading Facility (MTF) and Margins</a><br />
          <a href="">Charts and orders</a><br />
          <a href="">Alerts and Nudges</a><br />
          <a href="">General</a>
        </div>
        
      </div>


        <div className="row p-3">
        <div className="col-4 p-3">
          <h5 style={{ fontWeight: "400" }} className="heading">
           <i class="fa-solid fa-wallet"></i> &nbsp; &nbsp;Funds
          </h5>
          {/* <div className="col-2"> */}
          <a href="">Add money</a><br />
          <a href="">Withdraw money</a><br />
          <a href="">Add bank accounts</a><br />
          <a href="">eMandates</a>
        {/* </div> */}
</div>
         <div className="col-4 p-2">
          <h5 style={{ fontWeight: "400" }} className="heading">
            <i class="fa-solid fa-circle-notch"></i> &nbsp; &nbsp;Console
          </h5>
          
         
          <a href="">Portfolio</a><br />
          <a href="">Corporate actions</a><br />
          <a href="">Funds statement</a><br />
          <a href="">Reports</a><br />
          <a href="">Profile</a><br />
          <a href="">Segments</a>
        </div>
        <div className="col-4 p-2">
          <h5 style={{ fontWeight: "400" }} className="heading">
            <i class="fa-solid fa-coins"></i> &nbsp; &nbsp;Coin
          </h5>
          
          <a href="">Mutual funds</a><br />
          <a href="">National Pension Scheme (NPS)</a><br />
          <a href="">Features on Coin</a><br />
          <a href="">Payments and Orders</a><br />
          <a href="">General</a>
        </div>
        
      </div>
    </div>
  );
}

export default CreateTicket;
