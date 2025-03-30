import React, { useState } from 'react';
import './Navigation.css';

interface NavigationProps {
  onCityChange: (city: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onCityChange }) => {
  const [activeItem, setActiveItem] = useState('Home');
  const [showCityMenu, setShowCityMenu] = useState(false);
  
  const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'];
  
  const handleCitySelect = (city: string) => {
    onCityChange(city);
    setShowCityMenu(false);
  };
  
  const mainNavItems = [
    'Home', 'India', 'World', 'Business', 'Cricket', 'Sports', 'Entertainment', 'TV', 'Life & Style', 'Education', 'Photos', 'Videos'
  ];
  
  return (
    <nav className="navigation">
      <div className="primary-nav">
        {mainNavItems.map(item => (
          <a 
            key={item} 
            href="#" 
            className={activeItem === item ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              setActiveItem(item);
            }}
          >
            {item}
          </a>
        ))}
      </div>
      
      <div className="city-nav">
        <button 
          className="city-selector"
          onClick={() => setShowCityMenu(!showCityMenu)}
        >
          City News
          <span className="dropdown-arrow">▼</span>
        </button>
        
        {showCityMenu && (
          <div className="city-dropdown">
            {cities.map(city => (
              <button 
                key={city}
                onClick={() => handleCitySelect(city)}
              >
                {city}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;