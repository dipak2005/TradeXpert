const  mongoose  = require("mongoose");

const OrderSchema = require("../schemas/OrderSchema");

const OrdersModel = new mongoose.model("order",OrderSchema);

module.exports = OrdersModel;