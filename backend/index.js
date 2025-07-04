require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const LocalStratergy = require("passport-local");

const port = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const path = require("path");
const HoldingsModel = require("../backend/model/HodingsModel");
const PositionsModel = require("../backend/model/PositionsModel");
const OrdersModel = require("../backend/model/OrdersModel");
const SellsModel = require("../backend/model/SellModel");
const OTP = require("../backend/model/OtpModel");
const UserModel = require("../backend/model/UserModel");
const stockRoute = require("./routes/StockRoute");

// app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174", ],
    credentials: true,
  })
);
app.use(express.json());
// app.use("/api/stocks", stockRoute);

// // app.use("/",stockRoute);

const store = MongoStore.create({
  mongoUrl: process.env.MONGO_URL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});
store.on("error", () => {
  console.log("Error in MONGO SESSION STORE", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expries: Date.now() + 7 * 24 * 3600 * 1000,
    maxAge: 7 * 24 * 3600 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionOptions));

// app.use(passport.initialize());// initialize the passport
app.use(passport.session());

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currUser = req.user;
  next();
});

app.get("/allHoldings", async (req, res) => {
  let allholdings = await HoldingsModel.find({});
  return res.json(allholdings);
});

app.get("/allPositions", async (req, res) => {
  let allpositions = await PositionsModel.find({});
  return res.json(allpositions);
});

app.get("/allOrders", async (req, res) => {
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

app.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).send("Email is required");

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

app.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  const valid = await OTP.findOne({ email, otp });

  if (!valid) return res.status(404).send("Invalid otp");

  let user = await UserModel.findOne({ email });

  if (!user) {
    user = new UserModel({ email, name: req.body.name, isVerified: true });
    await user.save();
  } else {
    user.isVerified = true;
    await user.save();
  }

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

app.get("/auth/check", (req, res) => {
  if (req.session.userId) {
    res.json({ loggedIn: true });
  } else {
    res.json({ loggedIn: false });
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
