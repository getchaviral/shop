import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const categories = [
    {
      id: 1,
      name: 'Traditional Attire',
      description: 'Exquisite sarees, lehengas, and ethnic wear',
      image: '/images/sari.jpg',
      link: '/products?category=Traditional Attire'
    },
    {
      id: 2,
      name: 'Puja Samagri',
      description: 'Sacred items for worship and rituals',
      image: '/images/brasspujathaliset.jpeg',
      link: '/products?category=Puja Samagri'
    },
    {
      id: 3,
      name: 'Festive Essentials',
      description: 'Celebrate festivals with authentic decorations',
      image: '/images/diyaset.jpg',
      link: '/products?category=Festive Essentials'
    },
    {
      id: 4,
      name: 'Home Decor',
      description: 'Traditional handicrafts for your home',
      image: '/images/kalash.jpg',
      link: '/products?category=Home Decor'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Banarasi Silk Saree',
      price: '₹6,500',
      originalPrice: '₹8,000',
      image: '/images/sari.jpg',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Kurta Pajama Set',
      price: '₹2,800',
      originalPrice: '₹3,200',
      image: '/images/kurtapajamaset.jpg',
      rating: 4.2
    },
    {
      id: 3,
      name: 'Lehenga Choli',
      price: '₹8,000',
      originalPrice: null,
      image: '/images/lehngacholi.jpeg',
      rating: 4.8
    },
    {
      id: 4,
      name: 'Diwali Diyas Set',
      price: '₹500',
      originalPrice: null,
      image: '/images/diyaset.jpg',
      rating: 4.4
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1>Welcome to Traditional Shop</h1>
            <p>Discover the beauty of authentic Indian heritage with our carefully curated collection of traditional items, from exquisite clothing to sacred puja accessories.</p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">
                Explore Products
              </Link>
              <Link to="/products?isFeatured=true" className="btn btn-outline">
                Featured Items
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image"
          >
            <img src="/images/sari.jpg" alt="Traditional Indian Clothing" />
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Shop by Category</h2>
            <p>Explore our diverse collection of traditional Indian products</p>
          </motion.div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="category-card"
              >
                <Link to={category.link}>
                  <div className="category-image">
                    <img src={category.image} alt={category.name} />
                    <div className="category-overlay">
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Featured Products</h2>
            <p>Handpicked items that showcase the finest of Indian craftsmanship</p>
          </motion.div>

          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="product-card"
              >
                <Link to={`/products/${product.id}`}>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="product-rating">
                      {'★'.repeat(Math.floor(product.rating))}
                      <span>({product.rating})</span>
                    </div>
                    <div className="product-price">
                      <span className="current-price">{product.price}</span>
                      {product.originalPrice && (
                        <span className="original-price">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="section-footer">
            <Link to="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="feature"
            >
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Free delivery on orders above ₹1000</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="feature"
            >
              <div className="feature-icon">✅</div>
              <h3>Authentic Products</h3>
              <p>100% genuine traditional items</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="feature"
            >
              <div className="feature-icon">🔄</div>
              <h3>Easy Returns</h3>
              <p>Hassle-free returns within 7 days</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
