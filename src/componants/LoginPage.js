import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import logo from '../logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      // Hardcoded credentials check
      if (credentials.email === 'ankit.yadav@quantique.ai' && credentials.password === 'password123') {
        localStorage.setItem('isAuthenticated', 'true'); // Store authentication status
        navigate('/MappingPage'); // Navigate to MappingPage
      } else {
        setError('Invalid credentials'); // Set error for invalid login
      }
    } catch (err) {
      setError('An error occurred during login'); // Handle any unexpected errors
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value }); // Update credentials
  };

  return (
    <div className="login-page">
 
      <div className="logo">
        <div className='logo_img'>
        <img src={logo} alt="Quantique Logo" /></div>
      

      <div className="login-container">
        <h2>Welcome, Please Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="email" // Set name attribute for the email input
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              name="password" // Set name attribute for the password input
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
          <button className="forgot-password" type="button" onClick={handleForgotPassword}>
            Forgot Password?
          </button>
          <button type="submit" className="login-button">Login →</button>
        </form>
      </div>

    </div>
    <footer>
        <p>copyright quantiquemetadata@2024 all rights reserved</p>
      </footer>
    </div>
  );
}
export default LoginPage;
