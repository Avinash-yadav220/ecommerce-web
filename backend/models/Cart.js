const mongoose=require("mongoose");

const cartItemSchema=new mongoose.Schema({
    productId:{
        type:Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:1,
        default:1
    }
})

const cartSchema=new mongoose.Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
        unique:true
    },
    Items:[cartItemSchema]
},{timestamps:true})

module.exports=mongoose.model("Cart",cartSchema)