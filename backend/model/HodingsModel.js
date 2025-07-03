const mongoose = require("mongoose");

const HoldingSchema = require("../schemas/HoldingSchema");

const HoldingsModel = new mongoose.model("holding", HoldingSchema);

module.exports = mongoose.model("holding",HoldingSchema);