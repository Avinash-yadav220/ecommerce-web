
import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';
import trans from "../assets/Images/trans.png"; 

const Navbar = ({
  searchQuery,
  setSearchQuery,
  sortOrder,
  setSortOrder,
  categoryFilter,
  setCategoryFilter,
  onCartIconClick
}) => {
  const categories = ['T-Shirts', 'Hoodies', 'Jeans', 'Jackets', 'Shoes'];

  return (
    <nav className="navbar-container">
      {/* Left Side: Cart Icon */}
      <div className="nav-left">
        <button onClick={onCartIconClick} className="nav-icon-button">
          <FaShoppingCart />
        </button>
      </div>

      {/* Center Section: Logo & Search */}
      <div className="nav-center">
        <img src={trans} alt="Groomberg Logo" className="brand-logo" />
        <input
          type="text"
          placeholder="Search for products..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Right Side: Sort, Filter, & Account Icon */}
      <div className="nav-right">
        <div className="dropdown-group">
          <label htmlFor="sort-dropdown" className="dropdown-label">Sort:</label>
          <select id="sort-dropdown" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="accented-dropdown">
            <option value="">Default</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="nameAsc">Name: A-Z</option>
            <option value="nameDesc">Name: Z-A</option>
          </select>
        </div>
        <div className="dropdown-group">
          <label htmlFor="category-dropdown" className="dropdown-label">Category:</label>
          <select id="category-dropdown" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="accented-dropdown">
            <option value="">All</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <button className="nav-icon-button">
          <FaUser />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

