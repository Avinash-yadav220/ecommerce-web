
const express=require("express");
const { addToCart,getCart,removefromCart, updateQuantity } = require("../controllers/cartController");
const { verifyUser } = require("../Middleware/auth");
const Router=express.Router();


Router.get('/get-cart',verifyUser,getCart);
Router.post('/addtoCart',verifyUser,addToCart);
Router.put('/update',verifyUser,updateQuantity);
Router.delete('/:cartId',verifyUser,removefromCart)

module.exports=Router

