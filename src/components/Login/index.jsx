import React, { useState } from 'react';
import { useContext } from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import './index.css';
import { AuthContext } from '../../context/AuthContextProvider';

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState('success');
  
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  
    const onFinish = async () => {
      const payload={
        email,
        password
      }
      try {
        setLoading(true);
        const loginUrl = `http://localhost:8080/home/login`;
        const response = await fetch(loginUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
        const data = await response.json();
        console.log(response.data);
        if (response.status === 200) {
          setIsAuthenticated(true);
          localStorage.setItem("isAuthenticated", true);
          setToastMessage('Login successful!');
          setToastSeverity('success');
          setOpenToast(true);
          setTimeout(() => {
            window.location.href = '/';
          }, 1000);
          return;
        }
        throw new Error('Login failed');
      } catch (error) {
        setToastMessage('Login failed. Please try again.');
        setToastSeverity('error');
        setOpenToast(true);
      } finally {
        setLoading(false);
      }
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      onFinish();
    };

    const handleCloseToast = () => {
      setOpenToast(false);
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
            
            <p>Don't have an account? <a href="/signup">sign up</a></p>
          
          </div>
        </form>
      </div>
      <Snackbar 
        open={openToast} 
        autoHideDuration={6000} 
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert 
          onClose={handleCloseToast} 
          severity={toastSeverity} 
          sx={{ width: '100%', fontSize: '1.2rem', '& .MuiAlert-message': { fontSize: '1.2rem' } }}
        >
          {toastMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  )

} 