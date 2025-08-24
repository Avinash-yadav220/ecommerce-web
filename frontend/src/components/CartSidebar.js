// src/components/CartSidebar.js
import React from 'react';
import './CartSidebar.css';

export default function CartSidebar({ isCartOpen, setIsCartOpen, cart, setCart }) {
  const handleQuantityChange = (productId, newQuantity) => {
    setCart(prevCart => {
      if (newQuantity <= 0) {
        return prevCart.filter(item => item._id !== productId);
      }
      return prevCart.map(item =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>Shopping Cart</h3>
        <button onClick={() => setIsCartOpen(false)} className="close-cart-button">&times;</button>
      </div>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          cart.map(item => (
            <div key={item._id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(item._id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item._id, item.quantity + 1)}>+</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-footer">
        <div className="cart-total-display">
          <span>Total:</span>
          <span className="total-amount">${cartTotal}</span>
        </div>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
}