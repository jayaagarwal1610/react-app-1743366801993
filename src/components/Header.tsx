import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  
  return (
    <header className="header">
      <div className="top-bar">
        <div className="language-selector">
          <span className="active">English</span>
          <span>हिन्दी</span>
          <span>मराठी</span>
        </div>
        <div className="auth-links">
          <a href="#">Sign In</a>
          <a href="#">Subscribe</a>
        </div>
      </div>
      
      <div className="main-header">
        <div className="logo">
          <img src="https://static.toiimg.com/photo/91659766.cms" alt="Times of India Logo" />
        </div>
        
        <div className="header-actions">
          {showSearch ? (
            <div className="search-bar">
              <input type="text" placeholder="Search here" />
              <button>Search</button>
              <button onClick={() => setShowSearch(false)}>Close</button>
            </div>
          ) : (
            <button className="search-button" onClick={() => setShowSearch(true)}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </button>
          )}
          <button className="menu-button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      <div className="date-bar">
        <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <div className="social-icons">
          <a href="#" className="icon">FB</a>
          <a href="#" className="icon">TW</a>
          <a href="#" className="icon">YT</a>
          <a href="#" className="icon">IG</a>
        </div>
      </div>
    </header>
  );
};

export default Header;