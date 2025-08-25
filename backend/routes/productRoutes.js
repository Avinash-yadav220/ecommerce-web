const{getProducts, addProduct}=require('../controllers/productController');
const express=require("express");
const { verifyUser, isAdmin } = require('../Middleware/auth');
const multer=require("multer")
const path=require("path")
const Router=express.Router()


const storage=multer.diskStorage({
    destination:function(req,file,cb){
     cb(null, path.join(__dirname, '../uploads'));
    },
    filename:function(req,file,cb){
      cb(null,Date.now()+'-'+file.originalname)
    }
})

const upload=multer({storage:storage})

Router.get('/',getProducts)
Router.post('/add-product',verifyUser,isAdmin,upload.single('imageUrl'),addProduct)

module.exports=Router
