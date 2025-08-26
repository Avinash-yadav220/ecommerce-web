// import React, { useState, useContext } from 'react';
// import { FaShoppingCart, FaUser } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import './Navbar.css';
// import trans from "../assets/Images/trans.png"; 

// const Navbar = ({
//   searchQuery,
//   setSearchQuery,
//   sortOrder,
//   setSortOrder,
//   categoryFilter,
//   setCategoryFilter,
//   onCartIconClick
// }) => {
//   const categories = ['T-Shirts', 'Hoodies', 'Jeans', 'Jackets', 'Shoes'];
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const { user, logout } = useContext(AuthContext); 

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className="navbar-container">
//       {/* Left Side: Cart Icon */}
//       <div className="nav-left">
//         <button onClick={onCartIconClick} className="nav-icon-button">
//           <FaShoppingCart />
//         </button>
//       </div>

//       {/* Center Section: Logo & Search */}
//       <div className="nav-center">
//         <img src={trans} alt="Groomberg Logo" className="brand-logo" />
//         <input
//           type="text"
//           placeholder="Search for products..."
//           className="search-input"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Right Side: Sort, Filter, & Account Icon */}
//       <div className="nav-right">
//         <div className="dropdown-group">
//           <label htmlFor="sort-dropdown" className="dropdown-label">Sort:</label>
//           <select id="sort-dropdown" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="accented-dropdown">
//             <option value="">Default</option>
//             <option value="priceAsc">Price: Low to High</option>
//             <option value="priceDesc">Price: High to Low</option>
//             <option value="nameAsc">Name: A-Z</option>
//             <option value="nameDesc">Name: Z-A</option>
//           </select>
//         </div>
//         <div className="dropdown-group">
//           <label htmlFor="category-dropdown" className="dropdown-label">Category:</label>
//           <select id="category-dropdown" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="accented-dropdown">
//             <option value="">All</option>
//             {categories.map(cat => (
//               <option key={cat} value={cat}>{cat}</option>
//             ))}
//           </select>
//         </div>
        
//         {/* Profile Icon with Dropdown */}
//         {user ? (
//           <div className="user-dropdown-container">
//             <button onClick={toggleDropdown} className="nav-icon-button">
//               <FaUser />
//             </button>
//             {isDropdownOpen && (
//               <div className="dropdown-menu">
//                 <p className="welcome-message">Welcome, {user.name}!</p>
//                 {user.role === 'admin' && (
//                   <Link to="/add-product" onClick={toggleDropdown} className="dropdown-item">Add Product</Link>
//                 )}
//                 <button onClick={logout} className="dropdown-item">Logout</button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link to="/login" className="nav-icon-button">
//             <FaUser />
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useContext } from 'react';
// import { FaShoppingCart, FaUser } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import './Navbar.css';
// import trans from "../assets/Images/trans.png";

// const Navbar = ({
//   searchQuery,
//   setSearchQuery,
//   sortOrder,
//   setSortOrder,
//   categoryFilter,
//   setCategoryFilter,
//   onCartIconClick
// }) => {
//   const categories = ['T-Shirts', 'Hoodies', 'Jeans', 'Jackets', 'Shoes'];
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
//   const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
//   const { user, logout } = useContext(AuthContext);

//   const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);
//   const toggleSortDropdown = () => setIsSortDropdownOpen(!isSortDropdownOpen);
//   const toggleCategoryDropdown = () => setIsCategoryDropdownOpen(!isCategoryDropdownOpen);

//   const handleSortChange = (order) => {
//     setSortOrder(order);
//     setIsSortDropdownOpen(false);
//   };

//   const handleCategoryChange = (category) => {
//     setCategoryFilter(category);
//     setIsCategoryDropdownOpen(false);
//   };

//   const getSortLabel = () => {
//     if (sortOrder === 'priceAsc') return 'Price: Low to High';
//     if (sortOrder === 'priceDesc') return 'Price: High to Low';
//     if (sortOrder === 'nameAsc') return 'Name: A-Z';
//     if (sortOrder === 'nameDesc') return 'Name: Z-A';
//     return 'Default';
//   };

//   return (
//     <nav className="navbar-container">
//       {/* Left Side: Cart Icon */}
//       <div className="nav-left">
//         <button onClick={onCartIconClick} className="nav-icon-button">
//           <FaShoppingCart />
//         </button>
//       </div>

//       {/* Center Section: Logo & Search */}
//       <div className="nav-center">
//         <img src={trans} alt="Groomberg Logo" className="brand-logo" />
//         <input
//           type="text"
//           placeholder="Search for products..."
//           className="search-input"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Right Side: Sort, Filter, & Account Icon */}
//       <div className="nav-right">
//         {/* Sort Dropdown */}
//         <div className="dropdown-group">
//           <label className="dropdown-label">Sort:</label>
//           <button onClick={toggleSortDropdown} className="dropdown-label-btn">{getSortLabel()}</button>
//           {isSortDropdownOpen && (
//             <div className="dropdown-menu sort-filter-menu">
//               <button onClick={() => handleSortChange('')} className="dropdown-item">Default</button>
//               <button onClick={() => handleSortChange('priceAsc')} className="dropdown-item">Price: Low to High</button>
//               <button onClick={() => handleSortChange('priceDesc')} className="dropdown-item">Price: High to Low</button>
//               <button onClick={() => handleSortChange('nameAsc')} className="dropdown-item">Name: A-Z</button>
//               <button onClick={() => handleSortChange('nameDesc')} className="dropdown-item">Name: Z-A</button>
//             </div>
//           )}
//         </div>

//         {/* Category Dropdown */}
//         <div className="dropdown-group">
//           <label className="dropdown-label">Category:</label>
//           <button onClick={toggleCategoryDropdown} className="dropdown-label-btn">{categoryFilter || 'All'}</button>
//           {isCategoryDropdownOpen && (
//             <div className="dropdown-menu sort-filter-menu">
//               <button onClick={() => handleCategoryChange('')} className="dropdown-item">All</button>
//               {categories.map(cat => (
//                 <button key={cat} onClick={() => handleCategoryChange(cat)} className="dropdown-item">{cat}</button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Profile Icon with Dropdown */}
//         {user ? (
//           <div className="user-dropdown-container">
//             <button onClick={toggleProfileDropdown} className="nav-icon-button">
//               <FaUser />
//             </button>
//             {isProfileDropdownOpen && (
//               <div className="dropdown-menu">
//                 <p className="welcome-message">Welcome, {user.name}!</p>
//                 {user.role === 'admin' && (
//                   <Link to="/add-product" onClick={toggleProfileDropdown} className="dropdown-item">Add Product</Link>
//                 )}
//                 <button onClick={logout} className="dropdown-item">Logout</button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link to="/login" className="nav-icon-button">
//             <FaUser />
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.js

import React, { useState, useContext } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
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
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);
  const toggleSortDropdown = () => setIsSortDropdownOpen(!isSortDropdownOpen);
  const toggleCategoryDropdown = () => setIsCategoryDropdownOpen(!isCategoryDropdownOpen);

  const handleSortChange = (order) => {
    setSortOrder(order);
    setIsSortDropdownOpen(false);
  };

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
    setIsCategoryDropdownOpen(false);
  };

  const getSortLabel = () => {
    if (sortOrder === 'priceAsc') return 'Price: Low to High';
    if (sortOrder === 'priceDesc') return 'Price: High to Low';
    if (sortOrder === 'nameAsc') return 'Name: A-Z';
    if (sortOrder === 'nameDesc') return 'Name: Z-A';
    return 'Default';
  };

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
          <label className="dropdown-label">Sort:</label>
          <button onClick={toggleSortDropdown} className="dropdown-label-btn">{getSortLabel()}</button>
          {isSortDropdownOpen && (
            <div className="dropdown-menu sort-filter-menu">
              <button onClick={() => handleSortChange('')} className="dropdown-item">Default</button>
              <button onClick={() => handleSortChange('priceAsc')} className="dropdown-item">Price: Low to High</button>
              <button onClick={() => handleSortChange('priceDesc')} className="dropdown-item">Price: High to Low</button>
              <button onClick={() => handleSortChange('nameAsc')} className="dropdown-item">Name: A-Z</button>
              <button onClick={() => handleSortChange('nameDesc')} className="dropdown-item">Name: Z-A</button>
            </div>
          )}
        </div>
        
        <div className="dropdown-group">
          <label className="dropdown-label">Category:</label>
          <button onClick={toggleCategoryDropdown} className="dropdown-label-btn">{categoryFilter || 'All'}</button>
          {isCategoryDropdownOpen && (
            <div className="dropdown-menu sort-filter-menu">
              <button onClick={() => handleCategoryChange('')} className="dropdown-item">All</button>
              {categories.map(cat => (
                <button key={cat} onClick={() => handleCategoryChange(cat)} className="dropdown-item">{cat}</button>
              ))}
            </div>
          )}
        </div>

        {/* Profile Icon with Dropdown */}
        {user ? (
          <div className="user-dropdown-container">
            <button onClick={toggleProfileDropdown} className="nav-icon-button">
              <FaUser />
            </button>
            {isProfileDropdownOpen && (
              <div className="dropdown-menu">
                <p className="welcome-message">Welcome, {user.name}!</p>
                {user.role === 'admin' && (
                  <Link to="/add-product" onClick={toggleProfileDropdown} className="dropdown-item">Add Product</Link>
                )}
                <button onClick={()=>logout(navigate)} className="dropdown-item">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <div className="user-dropdown-container">
            <button onClick={toggleProfileDropdown} className="nav-icon-button">
              <FaUser />
            </button>
            {isProfileDropdownOpen && (
              <div className="dropdown-menu">
              <p className="welcome-message">Hello Handsome!</p>
                <Link to="/login" onClick={toggleProfileDropdown} className="dropdown-item">Login</Link>
                <Link to="/register" onClick={toggleProfileDropdown} className="dropdown-item">Register</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;