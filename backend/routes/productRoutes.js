
// const express = require('express');
// const { getProducts } = require('../controllers/productController');
const multer=require("multer")
const{getProducts, addProduct}=require('../controllers/productController');
const express=require("express");
const { verifyUser, isAdmin } = require('../Middleware/auth');
const Router=express.Router()
const path=require("path")
const storage=multer.diskStorage({
    destination:function(req,file,cb){
     cb(null, path.join(__dirname, '../uploads'));
    },
    filename:function(req,file,cb){
      cb(null,Date.now()+'-'+file.originalname)
    }
})

const upload=multer({storage:storage})
Router.get('/', getProducts);

Router.get('/',getProducts)
Router.get('/add-product',verifyUser,isAdmin,upload.single('imageUrl'),addProduct)


module.exports = Router;