const express = require("express")
const { getcart, addtocart, removeFromCart, updateCart } = require("../Controllers/products.controler")
const CartRouter = express.Router()



CartRouter.get("/", getcart)
CartRouter.post("/addtocart", addtocart)
CartRouter.patch("/updatecart/:id", updateCart)
CartRouter.delete("/removeFromCart/:id", removeFromCart)



module.exports = {CartRouter}

