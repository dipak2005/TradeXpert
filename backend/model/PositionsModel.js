const mongoose = require("mongoose");

const PostionSchema = require("../schemas/PostionsSchema.js");

const PositionsModel = new mongoose.model("position",PostionSchema);

module.exports = PositionsModel;