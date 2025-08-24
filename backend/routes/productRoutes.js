const{getProducts, addProduct}=require('../controllers/productController');
const express=require("express");
const { verifyUser, isAdmin } = require('../Middleware/auth');
const Router=express.Router()


Router.get('/',getProducts)
Router.get('/add-product',verifyUser,isAdmin,addProduct)

module.exports=Router
