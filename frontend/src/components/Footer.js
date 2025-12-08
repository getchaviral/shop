import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Traditional Shop</h3>
            <p>Bringing you the finest traditional Indian products with authentic craftsmanship and heritage.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="/products?category=Traditional Attire">Traditional Attire</a></li>
              <li><a href="/products?category=Puja Samagri">Puja Samagri</a></li>
              <li><a href="/products?category=Festive Essentials">Festive Essentials</a></li>
              <li><a href="/products?category=Home Decor">Home Decor</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/shipping">Shipping Info</a></li>
              <li><a href="/returns">Returns</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Traditional Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
