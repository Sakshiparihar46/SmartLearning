import React from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose, onSwitchToSignup }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Welcome to EduFlux</h2>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="login-user">Email / Username</label>
            <input type="text" id="login-user" placeholder="Enter your email or username" required />
          </div>

          <div className="input-group">
            <label htmlFor="login-password">Password</label>
            <input type="password" id="login-password" placeholder="Enter your password" required />
          </div>

          <div className="form-footer">
            <a href="#" className="forgot-password">Forgot Password?</a>
            <button type="submit" className="submit-login-btn">Log In</button>
          </div>
        </form>
        
        {/* Switch link */}
        <p className="modal-switch-text">
            Don't have an account? 
            <button type="button" className="switch-btn" onClick={onSwitchToSignup}>
                Sign Up
            </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;