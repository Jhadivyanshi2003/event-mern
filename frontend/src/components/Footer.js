import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Event Management</h3>
          <p>Making event planning and management simple and efficient for everyone.</p>
          <div className="social-links">
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> */}
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> */}
            <a href="https://www.linkedin.com/in/divyanshi-jha-b33570348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> */}
          </div>
        </div>

        {/* <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div> */}

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span> BEL Road, MSR nagar</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>+91 8521984852</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>jha.divyanshi1209@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Event Management System. All rights reserved.</p>
      </div>
    </footer>
  );
} 