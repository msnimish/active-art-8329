
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    "title": {type: String, required: true},
    "price": {type: Number, required: true},
    "strikedPrice": {type: Number, required: true},
    "newBadge": {type: String},
    "offBadge": {type: Number},
    "category": {type: String},
    "subCategory": {type: String},
    "brand": {type: String},
    "image": {type: String, required: true},
    "type": {type: String},
    "fit": {type: String},
    "design": {type: String},
    "sleeveLength": {type: String},
    "quantity": {type: Number},
    "adminID": {type: String},
    "inStock": {type: Number, required: true},
    "noOfSold": {type: Number},
    "productLaunchTime": {type: String}

}, {versionKey: false, timestamps: true});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };