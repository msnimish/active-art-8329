const express = require("express")
const { createproduct, getProducts, deleteproduct, updateproduct, getSingle} = require("../Controllers/products.controler")
const ProductRouter = express.Router()



ProductRouter.get("/", getProducts)
ProductRouter.post("/createproduct", createproduct)
ProductRouter.delete("/deleteproduct/:productID", deleteproduct)
ProductRouter.patch("/updateproduct/:productID", updateproduct)
ProductRouter.patch("/singleProduct/:id", getSingle)






module.exports = {ProductRouter}

