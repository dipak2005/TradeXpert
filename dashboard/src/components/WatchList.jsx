import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  Delete,
  DeleteOutlineOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
  Padding,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "../components/Doughnout";

const labels = watchlist.map((subarray) => subarray["name"]);
const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        labels: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(232, 63, 69, 0.72)",
          "rgba(38, 116, 218, 0.74)",
          "rgba(221, 179, 39, 0.71)",
          "rgba(22, 171, 225, 0.79)",
          "rgba(98, 43, 206, 0.5)",
          "rgba(206, 115, 25, 0.5)",
        ],
        borderColor: [
          "rgba(232, 63, 69, 1)",
          "rgba(38, 116, 218, 1)",
          "rgba(221, 179, 39, 1)",
          "rgba(22, 171, 225, 1)",
          "rgba(98, 43, 206, 1)",
          "rgba(206, 115, 25, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="watchlist-container">
        <div className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
            className="search"
          />
          <span className="counts"> {watchlist.length}/ 50</span>
        </div>

        <ul className="list">
          {watchlist.map((stock, index) => {
            return <WatchListItem stock={stock} key={index} />;
          })}
        </ul>
        <DoughnutChart data={data} />
      </div>
    </>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistAction, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseExit = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent"> {stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistAction && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  // BUY
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        {/* Buy */}
        <Tooltip
          title="BUY (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">BUY</button>
        </Tooltip>

        {/* Sell */}
        <Tooltip
          title="SELL (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleSellClick}
        >
          <button className="sell">Sell</button>
        </Tooltip>

        {/* delete
       <Tooltip
          title="Delete "
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="delete"><DeleteOutlineOutlined/></button>
        </Tooltip> */}

        {/* Graph */}
        <Tooltip
          title="Analytics (A)"
          placement="top"
          style={{ Padding: "10px 0 0 0" }}
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon mt-2" />
          </button>
        </Tooltip>

        <Tooltip
          title="More (.^.)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
