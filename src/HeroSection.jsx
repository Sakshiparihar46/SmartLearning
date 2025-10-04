import React from 'react';
import './HeroSection.css';

import heroBackgroundImage from './heropic.png'; 

const HeroSection = ({ onGetStartedClick }) => {
  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Unlock Your Potential with EduFlux</h1>
        <p className="hero-subtitle">Smart tools for smarter learning, bridging the gap to future skills.</p>
        <div className="hero-actions">
          
          <button className="btn-primary">Explore Features</button>
          
          <button 
            className="btn-secondary"
            onClick={onGetStartedClick} 
          >
            Get Started
          </button>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;