const mongoose = require("mongoose");

const SellSchema = new mongoose.Schema({
 name:String,
 qty:Number,
 price:Number,
 mode:String,
});


module.exports = SellSchema;