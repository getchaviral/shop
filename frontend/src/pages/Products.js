import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    } catch (err) {
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div className="loading">Loading products...</div>;
  if (products.length === 0) return <div>No products available</div>;

  return (
    <div className="products-page py-4">
      <div className="container">
        <h1 className="mb-4">Our Products</h1>
        <div className="grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '1rem',
                width: '250px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <img
                src={product.image || 'https://via.placeholder.com/250'}
                alt={product.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }}
              />
              <h3 className="mt-2">{product.name}</h3>
              <p style={{ fontWeight: 'bold', color: '#4B0082' }}>₹{product.price}</p>
              <Link to={`/product/${product.id}`}>
                <button className="btn btn-outline-primary w-100 mt-2">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
