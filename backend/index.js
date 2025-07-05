// load data from .env file
require("dotenv").config();

// express
const express = require("express");
const app = express();

// mongodb
const mongoose = require("mongoose");

// connect cross origin
const bodyParser = require("body-parser");
const cors = require("cors");

// sending mail through node
const nodemailer = require("nodemailer");

// store the session use
const crypto = require("crypto");
const session = require("express-session");
const MongoStore = require("connect-mongo");

// data from .env file
const port = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const path = require("path");

// models
const HoldingsModel = require("../backend/model/HodingsModel");
const PositionsModel = require("../backend/model/PositionsModel");
const OrdersModel = require("../backend/model/OrdersModel");
const SellsModel = require("../backend/model/SellModel");
const OTP = require("../backend/model/OtpModel");
const UserModel = require("../backend/model/UserModel");
const stockRoute = require("./routes/StockRoute");

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://tradexpert-ku2t.onrender.com",
      "https://dashboard-ef9y.onrender.com",
    ],
    credentials: true,
  })
);

app.use(express.json());

const store = MongoStore.create({
  mongoUrl: process.env.MONGO_URL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});
store.on("error", (err) => {
  console.log("Error in MONGO SESSION STORE", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: new Date(Date.now() + 7 * 24 * 3600 * 1000),
    maxAge: 7 * 24 * 3600 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionOptions));

//  endpoint of all-Holdings data
app.get("/allHoldings", async (req, res) => {
  let allholdings = await HoldingsModel.find({});
  return res.json(allholdings);
});

// endpoint of allposition data
app.get("/allPositions", async (req, res) => {
  let allpositions = await PositionsModel.find({});
  return res.json(allpositions);
});

// endpoint of allorders data
app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  return res.json(allOrders);
});

// endpoint of neworder data
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  if (newOrder.mode === "SELL") {
    const holding = await HoldingsModel.findOne({
      userId: req.body.userId,
      name: req.body.name,
    });

    const stock = holding?.Holdings.find((h) => h.name === req.body.name);

    if (!stock || stock.qty < req.params.qty) {
      return res
        .sendStatus(400)
        .json({ error: "Insufficient Quantity to sell" });
    }
  }
  newOrder.save();

  res.send("Order Saved!");
});

// endoint of selling stocks data
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

// generate random otp
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// endpoint to send the otp to desired email
app.post("/send-otp", async (req, res) => {
  const { email, name } = req.body;
  console.log(email, name, "sending");
  if (!email || !name) return res.status(400).send("Email and name required");

  const otpCode = generateOTP();
  const otp = new OTP({ email, otp: otpCode });
  await otp.save();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otpCode}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (info) {
      console.log(" Email sent:", info.response);
      res.send("OTP sent");
    } else {
      console.error(" Error sending email:", err);
      return res.status(500).send("Error sending mail");
    }
  });
});

//  endpoint to verify the otp
app.post("/verify-otp", async (req, res) => {
  const { email, otp, name } = req.body;
  console.log(email, name, "verify");
  const valid = await OTP.findOne({ email, otp });

  if (!valid) return res.status(404).send("Invalid otp");

  let user = await UserModel.findOne({ email });

  if (!user) {
    user = new UserModel({ email, name, isVerified: false });
  } else {
    user.isVerified = true;
  }
  await user.save();
  await OTP.deleteMany({ email });

  req.session.userId = user._id;

  return res.status(200).json({
    message: "OTP verified successfully.",
    user: {
      name: user.name,
      email: user.email,
      id: user._id,
    },
  });
});

// endpoint to check user is loggdin or not
app.get("/auth/check", async (req, res) => {
  if (!req.session.userId) return res.json({ loggedIn: false });

  const user = await UserModel.findById(req.session.userId);
   if (!user) {
    return res.json({ loggedIn: false, user: null });
  }
 
  if (user?.isVerified) {
    return res.json({ loggedIn: true, user: {name:user.name,email:user.email,id:user.userId} });
  } else {
    return res.json({ loggedIn: false });
  }
});
app.get("/", (req, res) => {
  res.send("Done!");
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
