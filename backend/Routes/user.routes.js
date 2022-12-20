// Routes for users
//const userRouter = require("../Controllers/signup.controller");

const express = require("express");
const userRouter = express.Router();
const signup = require("../Controllers/signup.controller");
const logIn = require("../Controllers/login.controller");

userRouter.post("/signup", signup);
userRouter.post("/login", logIn);
module.exports = { userRouter };
