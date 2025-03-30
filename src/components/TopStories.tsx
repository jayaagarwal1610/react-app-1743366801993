import React from 'react';
import './TopStories.css';

const TopStories: React.FC = () => {
  const topStories = [
    {
      id: 1,
      title: 'PM Modi inaugurates new airport terminal in Delhi',
      image: 'https://via.placeholder.com/600x400?text=Airport+Terminal',
      summary: 'Prime Minister Narendra Modi inaugurated the new terminal at Delhi International Airport on Friday, marking a significant milestone in India\'s aviation infrastructure.',
      category: 'India'
    },
    {
      id: 2,
      title: 'Indian cricket team wins series against Australia',
      image: 'https://via.placeholder.com/600x400?text=Cricket+Match',
      summary: 'India defeated Australia by 7 wickets in the final match to win the series 3-1, with Virat Kohli scoring a century.',
      category: 'Cricket'
    },
    {
      id: 3,
      title: 'Stock market reaches all-time high as Sensex crosses 75,000',
      image: 'https://via.placeholder.com/600x400?text=Stock+Market',
      summary: 'The Indian stock market continues its bull run with the Sensex crossing the 75,000 mark for the first time in history.',
      category: 'Business'
    },
    {
      id: 4,
      title: 'New film breaks box office records on opening weekend',
      image: 'https://via.placeholder.com/600x400?text=Movie+Poster',
      summary: 'The latest Bollywood blockbuster has smashed records, collecting over 100 crores in its opening weekend.',
      category: 'Entertainment'
    }
  ];

  return (
    <section className="top-stories">
      <h2 className="section-title">Top Stories</h2>
      
      <div className="featured-story">
        <img src={topStories[0].image} alt={topStories[0].title} />
        <div className="story-content">
          <span className="category">{topStories[0].category}</span>
          <h3>{topStories[0].title}</h3>
          <p>{topStories[0].summary}</p>
        </div>
      </div>
      
      <div className="stories-grid">
        {topStories.slice(1).map(story => (
          <div key={story.id} className="story-card">
            <img src={story.image} alt={story.title} />
            <div className="story-content">
              <span className="category">{story.category}</span>
              <h4>{story.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopStories;