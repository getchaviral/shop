import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        toast.error('Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Placeholder for actual cart logic
    toast.success('Added to cart!');
  };

  if (loading) return <div className="loading">Loading product...</div>;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="product-detail-page">
      <div className="container mt-4 mb-4">
        <div className="product-detail-grid" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <img
              src={product.image || 'https://via.placeholder.com/400'}
              alt={product.name}
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </div>
          <div style={{ flex: '2 1 300px' }}>
            <h2 className="mb-2">{product.name}</h2>
            <p className="mb-2">{product.description}</p>
            <h3 className="mb-3" style={{ color: '#8B4513' }}>₹{product.price}</h3>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
