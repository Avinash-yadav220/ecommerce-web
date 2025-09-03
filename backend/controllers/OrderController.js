const Cart = require("../models/Cart")
const Order = require("../models/Orders")


// const cashfree = new Cashfree({
//     clientId: process.env.CASHFREE_CLIENT_ID,
//     clientSecret: process.env.CASHFREE_CLIENT_SECRET,
//     environment: "SANDBOX", // or "PRODUCTION"
// });

const axios=require("axios")
const createOrder = async (req, res) => {
    const { shippingAddress,contact } = req.body
    try {
        const cart = await Cart.findOne({ userId: req.user._id }).populate('Items.productId')
        console.log(cart.Items)

        if (!cart || cart.Items.length === 0) {
            return res.status(400).json({ msg: 'Cart is empty' });
        }

        const totalAmount = cart.Items.reduce((sum, item) => sum + item.productId.price * item.quantity, 0)

        const response = await axios.post(
            "https://sandbox.cashfree.com/pg/orders",
            {
                order_amount: totalAmount, // replace with req.body.amount if dynamic
                order_currency: "INR",
                order_id: "order_" + Date.now(),
                customer_details: {
                    customer_id: req.user._id.toString(),
                    customer_email:req.user.email,
                    customer_phone: contact,
                },
            },
            {
                headers: {
                    "x-client-id": process.env.CASHFREE_CLIENT_ID,
                    "x-client-secret": process.env.CASHFREE_CLIENT_SECRET,
                    "x-api-version": "2022-09-01",
                    "Content-Type": "application/json",
                },
            }
        );
          
         const cashfreeOrder = response.data;

        const order = new Order({
            userId: req.user._id,
            Items: cart.Items.map(item => ({
                productId: item.productId._id,
                name: item.productId.name,
                price: item.productId.price,
                quantity: item.quantity,
                size: item.size
            })),
            shippingAddress,
            totalAmount,
            paymentStatus: 'pending',
            cashfreeOrderId: cashfreeOrder.order_id,

        })

        await order.save()
        await Cart.findOneAndDelete({ userId: req.user._id })

        res.json({
      payment_session_id: cashfreeOrder.payment_session_id,
      order_id: cashfreeOrder.order_id,
    });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'server error' })
    }

}

module.exports = {
    createOrder
}