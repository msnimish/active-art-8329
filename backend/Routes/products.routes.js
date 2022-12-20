const express = require("express")
const { createproduct, getProducts, deleteproduct, updateproduct, getSingleProduct} = require("../Controllers/products.controler")
const ProductRouter = express.Router()



ProductRouter.get("/", getProducts)
ProductRouter.post("/createproduct", createproduct)
ProductRouter.delete("/deleteproduct/:productID", deleteproduct)
ProductRouter.patch("/updateproduct/:productID", updateproduct)

ProductRouter.get("/singleProduct/:productID", getSingleProduct)






module.exports = {ProductRouter}

