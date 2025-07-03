if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 3000;
const url = process.env.MONGO_URL;

const path = require("path");
const HoldingsModel = require("../backend/model/HodingsModel");
const PositionsModel = require("../backend/model/PositionsModel");
const OrdersModel = require("../backend/model/OrdersModel");
const SellsModel = require("../backend/model/SellModel");
const stockRoute = require("./routes/StockRoute");
// const { default: Orders } = require("../dashboard/src/components/Orders");
// const { default: Holdings } = require("../dashboard/src/components/Holding");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
// app.use("/api/stocks", stockRoute);

// // app.use("/",stockRoute);
app.get("/allHoldings", async (req, res) => {
  let allholdings = await HoldingsModel.find({});
  return res.json(allholdings);
});

app.get("/allPositions", async (req, res) => {
  let allpositions = await PositionsModel.find({});
  return res.json(allpositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  if (Orders.mode === "SELL") {
    const holding = await HoldingsModel.findOne({
      userId: req.params.userId,
      name: req.body.name,
    });

    const stock = holding?.Holdings.find((h) => h.name === req.params.name);

    if (!stock || stock.qty < req.params.qty) {
      return res
        .sendStatus(400)
        .json({ error: "Insufficient Quantity to sell" });
    }
  }
  newOrder.save();

  res.send("Order Saved!");
});

app.post("/sellStocks", async (req, res) => {
  let sellStocks = new SellsModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  sellStocks.save();

  res.send("Sell Stock Successfull!");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
