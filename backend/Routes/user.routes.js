// Routes for users
//const userRouter = require("../Controllers/signup.controller");

const express = require("express");
const userRouter = express.Router();
const signup = require("../Controllers/signup.controller");

userRouter.post("/signup", signup);

module.exports = { userRouter };
