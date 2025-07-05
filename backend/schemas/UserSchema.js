const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  otp: {
    type: String,
    required:true
  },

  otpExpires: {
    type: Date,
    default: () => Date.now() + 5 * 60 * 1000,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = UserSchema;
