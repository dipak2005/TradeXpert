const express = require("express");
const axios = require("axios");
const StockData = require("../model/StokeModel");
require("dotenv").config();

const router = express.Router();

router.get("/fetch/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  const apiKey = process.env.API_KEY;

  const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&outputsize=1&apikey=${apiKey}`;
// https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&outputsize=5&apikey=${apiKey}
  try {
    const response = await axios.get(url);
    const stock = response.data?.values?.[0];

    if (!stock) {
      return res.status(404).json({ error: "No stock data found" });
    }

    const exists = await StockData.findOne({ symbol, datetime: stock.datetime });

    if (!exists) {
      await StockData.create({ symbol, ...stock });
    }

    res.status(200).json(stock);
  } catch (err) {
    console.error("API Fetch Error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
