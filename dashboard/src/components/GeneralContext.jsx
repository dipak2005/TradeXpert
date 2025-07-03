import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import { toast } from "react-toastify";

const GeneralContext = React.createContext({
  // BUY
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},

  //  SELL
   openSellWindow: (uid) => {},
   closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // BUY Section
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid)
     toast.success(`Buy window opened for ${uid}`);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    
  };

 // Sell Section
  const handleOpenSellWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid)
     toast.success(`Sell window opened for ${uid}`);
  };
  
   const handleCloseSellWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow:handleOpenSellWindow,
        closeSellWindow:handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;