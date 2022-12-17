
const mongoose = require("mongoose");


const orderSchema = mongoose.Schema({
    userID: {type:String, required:true},
    productIDs: {type: []},
    status: {type: String, required: true},
    timeOfOrder: {type: Date, required: true}
    
}, {versionKey: false, timeStamps: true});

const OrderModel = mongoose.model("order", orderSchema);

module.exports = { OrderModel };