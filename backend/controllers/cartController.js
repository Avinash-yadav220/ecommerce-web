const Cart = require("../models/Cart")

const addToCart=async(req,res)=>{
const{productId,size,quantity}=req.body
try {
    let cart=await Cart.findOne({userId:req.user._id})
    if(!cart){
        cart=new Cart({userId:req.user._id,Items:[]})
    }
      const ItemsIndex=cart.Items.findIndex(
        item=>item.productId.toString()===productId &&item.size===size
      )
    
      if(ItemsIndex>-1){
       cart.Items[ItemsIndex].quantity+=1;
      }else{
        cart.Items.push({quantity,productId,size})
      }

      await cart.save()
      
    const populatedCart = await cart.populate('Items.productId', 'name price imageUrl');

    res.json(populatedCart);
} catch (error) {
    console.error(err);

    return res.status(500).json({msg:'Server Error'})
}
 


}

const getCart=async(req,res)=>{
 try {
    let cart=await Cart.findOne({userId:req.user._id}).populate('Items.productId','name price imageUrl');
    if(!cart){
      cart=new Cart({userId:req.user._id,Items:[]})
       await cart.save()
    }

    res.json(cart)

 } catch (error) {
  console.error(error)
    res.status(500).json({msg:'server Error'})
    
 }
}
const removefromCart=async(req,res)=>{
try {
    const cart=await Cart.findOne({userId:req.user._id})
    
     cart.Items=cart.Items.filter(
        item=>item._id.toString()!==req.params.cartId
     )
     await cart.save()
     const updatedCart=await cart.populate('Items.productId','name price imageUrl')
     res.json(updatedCart)
} catch (error) {
    res.status(500).json({msg:"Server Error"})
}
}

const updateQuantity = async (req, res) => {
  const { cartId, quantity } = req.body;
  try {
    const cart = await Cart.findOne({ userId: req.user._id });
      console.log(cart)
    if (!cart) {
      return res.status(404).json({ msg: 'Cart not found' });
    }

    const itemIndex = cart.Items.findIndex(item => item._id.toString() === cartId);
    if (itemIndex > -1) {
      cart.Items[itemIndex].quantity = quantity;
      await cart.save();
      const updated=await cart.populate('Items.productId','name price imageUrl')
      res.json(updated)
    } else {
      res.status(404).json({ msg: 'Item not in cart' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports={
    addToCart,
    getCart,
    removefromCart,
    updateQuantity
}