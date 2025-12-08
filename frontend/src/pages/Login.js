import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login validation (replace with API call later)
    if (email === 'test@example.com' && password === 'password123') {
      toast.success('Login successful!');
      navigate('/profile'); // redirect to profile
    } else {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <div className="container mt-4 mb-4">
        <h1 className="mb-3">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group mt-3">
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </div>
        </form>

        <p className="mt-3 text-center">
          Don’t have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
