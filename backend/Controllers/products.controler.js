const mongoose = require("mongoose")
const { ProductModel } = require("../Models/Products.Model")
const { CartModel }  = require("../Models/Cart.Model")

const getProducts = async (req, res) => {
    const query = req.query
    console.log(query)
    try {
        const data = await ProductModel.find(query).limit(20).sort({createdAt: -1})
        res.send(data)
    } catch (err) {
        console.log("Error", err)
        res.send({msg:"err"})
    }
}

const getSingleProduct = async (req, res) => {
    const {productID} = req.params
    try {
        const data = await ProductModel.find({_id:productID})
        res.send(data)
    } catch (err) {
        console.log("Error", err)
        res.send({msg:"err"})
    }
}

const createproduct = async (req, res) => {
    const payload = req.body
  

    try {
        await ProductModel.insertMany(payload.data)
        res.send({ msg: "New Product Launched" })
    } catch (err) {
        console.log("Error", err)
        res.send({msg:"err"})
    }
}

const deleteproduct = async (req, res) => {
    const {productID} = req.params
  const userID = req.headers
    try {
        await ProductModel.findByIdAndDelete({_id : productID})
        res.send({msg:"product deleted successfully"})
    } catch (err) {
        console.log("Error", err)
        res.send({msg:"err"})
    }
}

const updateproduct = async (req, res) => {
    const {productID} = req.params
    const payload = req.body
    try {
        await ProductModel.findByIdAndUpdate({_id : productID}, payload)
        res.send({msg:"product updated successfully"})
    } catch (err) {
        console.log("Error", err)
        res.send({msg:"err"})
    }
}



const getcart = async (req, res) => {
    const userID = req.headers  
    // {userID : userID}
    try {
       const data =  await CartModel.find()
        res.send(data)
    } catch (err) {
        console.log("Error", err)
        res.send({msg:"err"})
    }
}


const addtocart = async (req, res) => {
    const payload = req.body
   
    console.log(payload)

    try {

        const product = await CartModel.findOne({productID : payload._id})
        if(product){
            res.send({"msg":"alreadypresent"})
        }else{
            payload.productID = payload._id
            delete payload._id
            await CartModel.create(payload)
            res.send({ "msg": "added" })
        }  
    } catch (err) {
        console.log("Error", err)
        res.send({"msg":"err"})
    }
}


const updateCart = async (req, res) => {
    const {id} = req.params
    const payload = req.body
    try {
        await CartModel.findByIdAndUpdate({_id : id}, payload)
        res.send({msg:"product updated successfully in the cart"})
    } catch (err) {
        console.log("Error", err)
        res.send({msg:"err"})
    }
}


const removeFromCart = async (req, res) => {
    const {id} = req.params
    try {
        await CartModel.findByIdAndDelete({_id:id})
        res.send({ msg: "product deleted" })
    } catch (err) {
        console.log("Error", err)
        res.send({msg:"err"})
    }
}


module.exports = { createproduct, getProducts, deleteproduct, updateproduct, getcart, addtocart, removeFromCart, updateCart, getSingleProduct }