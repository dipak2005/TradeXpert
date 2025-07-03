const mongoose = require("mongoose");

const StockSchema = require("../schemas/StokeSchema");


const StockModel = new mongoose.model("stock",StockSchema);

module.exports = StockModel;