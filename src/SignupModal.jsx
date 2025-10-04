import React from 'react';
import './LoginModal.css'; 

const SignupModal = ({ onClose, onSwitchToLogin, onSuccessfulSignup }) => {
  
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    
    // --- AUTHENTICATION LOGIC GOES HERE ---
    console.log('Signup form submitted successfully. Redirecting to dashboard...');
    onSuccessfulSignup(); 
  };
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Join EduFlux Today!</h2>
        
        <form className="login-form" onSubmit={handleSignupSubmit}>
          <div className="input-group">
            <label htmlFor="signup-username">Username</label>
            <input type="text" id="signup-username" placeholder="Create a username" required />
          </div>
          <div className="input-group">
            <label htmlFor="signup-email">Email</label>
            <input type="email" id="signup-email" placeholder="Enter your email address" required />
          </div>
          <div className="input-group">
            <label htmlFor="signup-password">Password</label>
            <input type="password" id="signup-password" placeholder="Create a password" required />
          </div>
          
          <button type="submit" className="submit-login-btn">Sign Up</button>
        </form>
        
        <p className="modal-switch-text">
            Already have an account? 
            <button type="button" className="switch-btn" onClick={onSwitchToLogin}>
                Log In
            </button>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;