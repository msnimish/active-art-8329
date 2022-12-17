
const mongoose = require("mongoose");


const cartSchema = mongoose.Schema({
    userID: {type:String, required:true},
    productIDs: {type: []},
    total : { type: Number }
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };