const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        name: String,
        price: Number,
        quantity: Number,
        size: String
    }],
    shippingAddress: {
        street:String,
        city: String,
        state: String,
        postalCode: Number,
        country: String,
        contact:Number
    },
    totalAmount:{
        type:String,
        required:true
    },
    paymentStatus:{
        type:String,
        default:'pending',
        enum:['pending','paid','failed']
    },
    cashfreeOrderId:String
},{timestamps:true})

module.exports =mongoose.model("Order",OrderSchema)