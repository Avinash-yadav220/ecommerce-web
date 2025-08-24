import React from 'react'
import { getProducts } from '../controllers/productController';
const express=require("express");
const Router=express.Router()


Router.get('/',getProducts)

module.exports=Router
