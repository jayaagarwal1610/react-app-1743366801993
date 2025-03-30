import React from 'react';
import './EntertainmentSection.css';

const EntertainmentSection: React.FC = () => {
  const entertainmentNews = [
    {
      id: 1,
      title: 'Superstar announces new film project with acclaimed director',
      image: 'https://via.placeholder.com/400x300?text=Film+Announcement',
      category: 'Bollywood'
    },
    {
      id: 2,
      title: 'Popular TV show to end after 10 successful seasons',
      image: 'https://via.placeholder.com/400x300?text=TV+Show',
      category: 'Television'
    },
    {
      id: 3,
      title: 'Music festival announces star-studded lineup for this year',
      image: 'https://via.placeholder.com/400x300?text=Music+Festival',
      category: 'Music'
    },
    {
      id: 4,
      title: 'Highly anticipated web series to release next month on OTT platform',
      image: 'https://via.placeholder.com/400x300?text=Web+Series',
      category: 'OTT'
    }
  ];

  return (
    <section className="entertainment-section">
      <h2 className="section-title">Entertainment</h2>
      
      <div className="entertainment-grid">
        {entertainmentNews.map(news => (
          <div key={news.id} className="entertainment-card">
            <div className="image-container">
              <img src={news.image} alt={news.title} />
              <span className="category-badge">{news.category}</span>
            </div>
            <h4>{news.title}</h4>
          </div>
        ))}
      </div>
      
      <div className="entertainment-topics">
        <h3>Popular Topics</h3>
        <div className="topic-tags">
          <span className="topic-tag">Bollywood</span>
          <span className="topic-tag">Hollywood</span>
          <span className="topic-tag">Movie Reviews</span>
          <span className="topic-tag">TV Shows</span>
          <span className="topic-tag">Web Series</span>
          <span className="topic-tag">Music</span>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentSection;