import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Welcome Back</h2>
      <p>Enter your credential to login</p>
      <form className="auth-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="primary-btn">Login</button>
        <Link className="forgot" to="#">Forgot password?</Link>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
};

export default Login;
