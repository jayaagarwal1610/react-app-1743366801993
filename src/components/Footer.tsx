import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>News</h3>
          <ul>
            <li><a href="#">India</a></li>
            <li><a href="#">World</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Cricket</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Entertainment</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>TV Shows</h3>
          <ul>
            <li><a href="#">Times Now</a></li>
            <li><a href="#">ET Now</a></li>
            <li><a href="#">Zoom</a></li>
            <li><a href="#">Mirror Now</a></li>
            <li><a href="#">Movies Now</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Other Times Group</h3>
          <ul>
            <li><a href="#">Economic Times</a></li>
            <li><a href="#">Maharashtra Times</a></li>
            <li><a href="#">Navbharat Times</a></li>
            <li><a href="#">Mumbai Mirror</a></li>
            <li><a href="#">Bangalore Mirror</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">TW</a>
            <a href="#" className="social-icon">IG</a>
            <a href="#" className="social-icon">YT</a>
            <a href="#" className="social-icon">LI</a>
          </div>
          
          <div className="app-download">
            <h4>Download App</h4>
            <div className="app-buttons">
              <a href="#" className="app-button">Android</a>
              <a href="#" className="app-button">iOS</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">
          © 2023 Times Internet Limited. All rights reserved.
        </div>
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Advertise with Us</a>
          <a href="#">Feedback</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;