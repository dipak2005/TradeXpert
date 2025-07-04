const mongoose = require("mongoose");
const OtpSchema = require("../schemas/OtpSchema");

const OtpModel = new mongoose.model("otp",OtpSchema);

module.exports = OtpModel;