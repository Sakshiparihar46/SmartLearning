import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback! It has been submitted.");
    e.target.reset(); 
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/*Feedback Form */}
        <div className="footer-section feedback-section">
          <h3>Leave Your Feedback</h3>
          <p>Help us improve EduFlux. We value your honest opinion!</p>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Your Email (Optional)" className="feedback-input" />
            <textarea placeholder="Tell us what you think..." className="feedback-textarea" required></textarea>
            <button type="submit" className="btn-submit-feedback">Submit Feedback</button>
          </form>
        </div>
        
        {/*Admin & Social Media*/}
        <div className="footer-section social-section">
          <h3>Connect with the Admin</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.261 8.246 11.392H16.89l-6.521-8.582L4.64 21.75H2.56l7.85-10.373L2.25 2.25h3.351l6.096 7.973L18.244 2.25z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <svg viewBox="0 0 24 24"><path d="M20.5 2.5h-17A1.5 1.5 0 0 0 2 4v16a1.5 1.5 0 0 0 1.5 1.5h17a1.5 1.5 0 0 0 1.5-1.5V4a1.5 1.5 0 0 0-1.5-1.5zM8 18h-2v-7h2v7zm-1-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm11 8h-2v-4c0-1.04-.84-1.88-1.88-1.88s-1.87.84-1.87 1.88v4h-2v-7h2v1.5c.34-.65 1.25-1.5 2.87-1.5 2.06 0 3.13 1.33 3.13 3.96V18z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon github">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.864 8.169 6.837 9.489.5.092.682-.218.682-.483 0-.237-.008-.868-.013-1.705-2.782.604-3.374-1.34-3.374-1.34-.454-1.154-1.107-1.464-1.107-1.464-.905-.618.069-.607.069-.607 1.002.072 1.531 1.029 1.531 1.029.89 1.528 2.336 1.087 2.903.83.091-.645.351-1.087.637-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.681-.103-.254-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.024A9.475 9.475 0 0 1 12 6.844c.85.006 1.706.115 2.519.336 1.91-1.293 2.748-1.024 2.748-1.024.546 1.378.203 2.396.098 2.65.64.697 1.029 1.59 1.029 2.681 0 3.843-2.339 4.686-4.562 4.935.359.309.678.92.678 1.855 0 1.34-.012 2.418-.012 2.753 0 .265.18.575.687.488C19.144 20.169 22 16.419 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
          </div>
          <p className="admin-contact">
            For support: **admin@eduflux.com**
          </p>
        </div>

        {/*Related Info*/}
        <div className="footer-section info-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#features">Our Features</a></li>
            <li><a href="#rewards">Rewards Program</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/*Copyright/Brand Footer  */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EduFlux. All rights reserved. Built with intelligence and passion.</p>
      </div>
    </footer>
  );
};

export default Footer;