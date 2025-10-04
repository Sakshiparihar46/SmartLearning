import React, { useState } from 'react';
import './Header.css';

const Header = ({ onLoginClick, onSignupClick }) => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="logo-container">
          <svg className="logo-icon" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#007bff"/>
            <path d="M12 1L1 12h3l-1 9 9-9v-6z" fill="#007bff"/>
          </svg>
          <h1 className="logo-name">EduFlux</h1>
        </div>
        
        {/* Navigation Links */}
        <div className="center-nav-links desktop-only">
          <ul className="nav-links">
            {/* Learning Tools */}
            <li><a href="#scheduling">Scheduling</a></li> 
            
            {/* Assessment & Practice */}
            <li><a href="#assessment">Assessment & Practice</a></li> 
            
            {/* Career & Support */}
            <li><a href="#career">Career & Support</a></li> 
          </ul>
        </div>
        
        {/* 3. Auth Buttons  */}
        <div className="auth-buttons desktop-only">
            <button className="btn-login" onClick={onLoginClick}>
              Log In
            </button>
            <button className="btn-signup" onClick={onSignupClick}> 
              Sign Up
            </button>
        </div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
        {/* Full Mobile Menu  */}
        <div className={`nav-menu-mobile ${isMenuOpen ? 'active' : ''}`}>
             <ul className="nav-links-mobile">
                <li><a href="#scheduling">Scheduling</a></li>
                <li><a href="#aiquestions">AI Generated Questions</a></li>
                <li><a href="#analytics">Analytics</a></li>
                <li><a href="#doubtsolving">Doubt Solving</a></li>
                <li><a href="#resumeanalysis">Resume Analysis</a></li>
            </ul>
            <div className="auth-buttons-mobile">
                <button className="btn-login" onClick={onLoginClick}>Log In</button>
                <button className="btn-signup" onClick={onSignupClick}>Sign Up</button> 
            </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;