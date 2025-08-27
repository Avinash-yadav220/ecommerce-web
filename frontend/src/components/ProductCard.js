// import './ProductCard.css';

// export default function ProductCard({ product, onAddToCart }) {
//   return (
//     <div className="product-card-container">
//       <img src={`http://localhost:5000${product.imageUrl}`} alt={product.name} className="product-image" />
//       <div className="product-details">
//         <h3 className="product-name">{product.name}</h3>
//         <p className="product-price">${product.price.toFixed(2)}</p>
//         <button className="add-to-cart-button" onClick={onAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// src/components/ProductCard.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './ProductCard.css';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card-container">
      <img src={`http://localhost:5000/${product.imageUrl}`} alt={product.name} className="product-image" />
      <div className="product-details">
        <div className="product-info-top">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">₹{product.price.toFixed(2)}</p>
        </div>
        <button className="add-to-cart-icon-button" onClick={onAddToCart}>
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
}