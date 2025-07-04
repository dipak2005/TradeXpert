const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
 email:String,
 otp:String,
 createdAt: {
    type:Date,
    default:Date.now(),
    expires:300,
 }
});

module.exports = OtpSchema;