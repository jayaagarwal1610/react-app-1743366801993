import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TopStories from './components/TopStories';
import LatestNews from './components/LatestNews';
import CityNews from './components/CityNews';
import EntertainmentSection from './components/EntertainmentSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [citySelected, setCitySelected] = useState('Delhi');
  
  return (
    <div className="app">
      <Header />
      <Navigation onCityChange={(city) => setCitySelected(city)} />
      <div className="content-container">
        <div className="main-content">
          <TopStories />
          <CityNews city={citySelected} />
          <EntertainmentSection />
        </div>
        <div className="sidebar">
          <LatestNews />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;