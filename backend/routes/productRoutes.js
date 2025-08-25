
// const express = require('express');
// const { getProducts } = require('../controllers/productController');

const{getProducts, addProduct}=require('../controllers/productController');
const express=require("express");
const { verifyUser, isAdmin } = require('../Middleware/auth');
const Router=express.Router()


const router = express.Router();

router.get('/', getProducts);

Router.get('/',getProducts)
Router.get('/add-product',verifyUser,isAdmin,addProduct)


module.exports = router;