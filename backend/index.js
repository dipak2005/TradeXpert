if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const port = process.env.PORT || 3000;
const url = process.env.MONGO_URL;

const path = require("path");
const HoldingsModel = require("../backend/model/HodingsModel");
const PositionsModel = require("../backend/model/PositionsModel");
const OrdersModel = require("../backend/model/OrdersModel");
const SellsModel = require("../backend/model/SellModel");
const OTP = require('../backend/model/OtpModel');
const stockRoute = require("./routes/StockRoute");


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

app.get("/allOrders", async (req,res) => {
 let allOrders = await OrdersModel.find({});
 return res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  if (newOrder.mode === "SELL") {
    const holding = await HoldingsModel.findOne({
      // userId: req.params.userId,
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

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

app.post("/send-otp", async (req,res) => {
 const { email } = req.body;
 const otpCode = generateOTP();
 const otp = new OTP.find();

 await otp.save();

 const transporter= nodemailer.createTransport({
  service:"gmail",
  auth:{
    user:process.env.EMAIL,
    pass:process.env.PASSWORD,
  }
 })

 const mailOptions = {
  from:process.env.EMAIL,
  to: email,
  subject:"Your OTP Code",
  text:`Your OTP is ${otpCode}`
 };


 transporter.sendMail(mailOptions, (err,info)=> {
   if (err) {
    return res.status(500).send("Error sending mail");
   }else {
    res.send("OTP sent");
   }
 });
});


app.post("/verify-otp" , async(req,res) => {
 
  const {email,otp} = req.body;

  const valid = await OTP.find({email,otp});

  if (!valid) {
    return res.status(400).send("Invalid Otp");
  }else {
    await OTP.deleteMany({email});
    res.send("OTP verified");
  }
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
