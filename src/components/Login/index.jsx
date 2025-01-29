import React, { useState } from 'react';
import './index.css';
export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = async () => {
    try {
      setLoading(true);
      const loginUrl = `http://localhost:8080/api/users/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
  
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Login successful!');
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      alert('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFinish();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="button-group">
            <button
              type="submit"
              disabled={loading}
              className="login-button"
            >
              {loading ? 'Loading...' : 'Log in'}
            </button>
            <button
              type="button"
              className="register-button"
              onClick={() => window.location.href = '/register'}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}