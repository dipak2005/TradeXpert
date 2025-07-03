const mongoose = require("mongoose");

const SellSchema = require("../schemas/SellSchema");


const SellModel =  new mongoose.model("sell",SellSchema);

module.exports = SellModel;