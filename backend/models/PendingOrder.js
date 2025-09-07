const mongoose = require("mongoose")

const pendingOrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    Items: [
        {
         productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            required:true
         },
         name:String,
         price:Number,
         quantity:Number,
         size:String,
        }
    ],
    shippingAddress:{
       street: String,
      city: String,
      state: String,
      postalCode: Number,
      country: String,
      contact: Number,
    },
    totalAmount:{
        type:Number,
        required:true
    },
      paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    cashfreeOrderId: { type: String, required: true },
    paymentSessionId: String, // optional if you want to store the session
  
},{timestamps:true})

module.exports=mongoose.model("PendingOrder",pendingOrderSchema)
