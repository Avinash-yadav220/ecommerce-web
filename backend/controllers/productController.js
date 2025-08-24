const Products = require("../models/products");


const getProducts=async(req,res)=>{
 try {
     const {search,sort,category}=req.query;
     
     let query={}
     let sortOption={}
   
     if(search){
       query.$or=[
         {name:{$regex:search,$options:'i'}},
         {description:{$regex:search,options:'i'}}
       ]
     }
     if(category){
       query.category=category
     }
   
     if(sort){
       if(sort==='priceAsc')sortOption.price=1
       if(sort==='priceDesc')sortOption.price=-1
       if(sort==='nameAsc')sortOption.name=1
       if(sort==='nameDesc')sortOption.name=-1
     }
      
     const products=Products.findOne(query).sort(sortOption)
     res.json(products)
 } catch (error) {
     res.status(500).json({msg:"server error"})
 }
}

module.exports={
    getProducts
}