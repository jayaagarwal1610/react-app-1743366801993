import React from 'react';
import './LatestNews.css';

const LatestNews: React.FC = () => {
  const latestNews = [
    {
      id: 1,
      title: 'RBI keeps repo rate unchanged at 6.5% for seventh consecutive time',
      time: '25 min ago',
      category: 'Business'
    },
    {
      id: 2,
      title: 'Weather department issues heavy rainfall alert for coastal areas',
      time: '32 min ago',
      category: 'India'
    },
    {
      id: 3,
      title: 'New COVID variant detected in 5 states, officials say no cause for alarm',
      time: '45 min ago',
      category: 'Health'
    },
    {
      id: 4,
      title: 'Supreme Court issues guidelines on political advertisements',
      time: '1 hour ago',
      category: 'India'
    },
    {
      id: 5,
      title: 'National education policy implementation to be completed by 2025',
      time: '1.5 hours ago',
      category: 'Education'
    },
    {
      id: 6,
      title: 'Indian tech companies report strong Q3 earnings, stocks surge',
      time: '2 hours ago',
      category: 'Business'
    },
    {
      id: 7,
      title: 'Famous actor announces retirement from films after 30-year career',
      time: '2.5 hours ago',
      category: 'Entertainment'
    }
  ];

  return (
    <div className="latest-news">
      <h2 className="section-title">Latest News</h2>
      
      <div className="news-list">
        {latestNews.map(news => (
          <div key={news.id} className="news-item">
            <div className="news-content">
              <span className="category">{news.category}</span>
              <h4>{news.title}</h4>
              <span className="time">{news.time}</span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="view-more">View More</button>
    </div>
  );
};

export default LatestNews;