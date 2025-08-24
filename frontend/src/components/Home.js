// src/components/ProductsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import CartSidebar from './CartSidebar';
import './ProductsPage.css';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, sortOrder, categoryFilter]);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('http://localhost:5000/api/products', {
        params: {
          search: searchQuery,
          sort: sortOrder,
          category: categoryFilter,
        },
      });
      setProducts(res.data);
    } catch (err) {
      setError('Failed to fetch products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item._id === product._id);
      if (existingItem) {
        return prevCart.map(item =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="page-layout">
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        onCartIconClick={() => setIsCartOpen(true)}
      />
      <main className="main-products-grid">
        {loading ? (
          <p className="status-message">Loading products...</p>
        ) : error ? (
          <p className="status-message error-message">{error}</p>
        ) : (
          <div className="product-grid">
            {products.map(product => (
              <ProductCard 
                key={product._id} 
                product={product} 
                onAddToCart={() => handleAddToCart(product)} 
              />
            ))}
          </div>
        )}
      </main>
      <CartSidebar 
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}

