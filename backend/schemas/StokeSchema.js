const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  Symbol:String,
  datetime:String,
  open:String,
  high:String,
  low:String,
  close:String,
  volume:String,
} );

module.exports = StockSchema;