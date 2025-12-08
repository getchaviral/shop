import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { 
  ShoppingCart, 
  User, 
  Search, 
  Menu, 
  X, 
  Heart,
  LogOut,
  Package
} from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { user } = useSelector((state) => state.auth);
  const { totalItems } = useSelector((state) => state.cart);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          <h1>Traditional Shop</h1>
          <span>Authentic Indian Heritage</span>
        </Link>

        {/* Search Bar */}
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for traditional items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              <Search size={20} />
            </button>
          </div>
        </form>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/products?category=Traditional Attire" className="nav-link">
            Traditional Attire
          </Link>
          <Link to="/products?category=Puja Samagri" className="nav-link">
            Puja Samagri
          </Link>
          <Link to="/products?category=Festive Essentials" className="nav-link">
            Festive Items
          </Link>
        </nav>

        {/* User Actions */}
        <div className="user-actions">
          {/* Cart */}
          <Link to="/cart" className="action-btn cart-btn">
            <ShoppingCart size={24} />
            {totalItems > 0 && <span className="badge">{totalItems}</span>}
          </Link>

          {/* User Menu */}
          {user ? (
            <div className="user-menu">
              <button className="user-btn">
                <User size={24} />
                <span>{user.name}</span>
              </button>
              <div className="dropdown">
                <Link to="/profile" className="dropdown-item">
                  <User size={16} />
                  Profile
                </Link>
                <Link to="/orders" className="dropdown-item">
                  <Package size={16} />
                  Orders
                </Link>
                <Link to="/wishlist" className="dropdown-item">
                  <Heart size={16} />
                  Wishlist
                </Link>
                <button onClick={handleLogout} className="dropdown-item logout">
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-outline">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
