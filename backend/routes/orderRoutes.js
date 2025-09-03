const express=require("express")
const { verifyUser } = require("../Middleware/auth")
const { createOrder } = require("../controllers/OrderController")
const Router=express.Router()

Router.post('/create-order',verifyUser,createOrder)

module.exports=Router