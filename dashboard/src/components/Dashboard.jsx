import React,{useEffect,useState} from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "../components/Apps";
import Funds from "../components/Funds";
import Holdings from "../components/Holding";

import Orders from "../components/Orders";
import Positions from "../components/Positions";
import Summary from "../components/Summary";
import WatchList from "../components/WatchList";
import {GeneralContextProvider} from "./GeneralContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("https://backend-4u6j.onrender.com/auth/check", { withCredentials: true })
      .then((res) => {
        if (res.data.loggedIn) {
          setName(res.data.user);
        }
      }).catch(()=>{
        window.location.href="https://dashboard-ef9y.onrender.com";
      })
      .finally(() => setLoading(false));
  });
  if (loading) return <p>Loading...</p>;

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
        <ToastContainer position="top-right" autoClose={2000} />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary name={name} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
        
      </div>
    </div>
  );
};

export default Dashboard;