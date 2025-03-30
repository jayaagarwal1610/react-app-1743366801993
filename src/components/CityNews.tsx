import React from 'react';
import './CityNews.css';

interface CityNewsProps {
  city: string;
}

const CityNews: React.FC<CityNewsProps> = ({ city }) => {
  const cityNewsMap = {
    Delhi: [
      {
        id: 1,
        title: 'Delhi govt announces water conservation plan for summer months',
        image: 'https://via.placeholder.com/300x200?text=Delhi+Water',
        summary: 'The Delhi government has announced a comprehensive water conservation plan to tackle shortages during the upcoming summer months.'
      },
      {
        id: 2,
        title: 'Metro service disrupted on Yellow Line due to technical glitch',
        image: 'https://via.placeholder.com/300x200?text=Delhi+Metro',
        summary: 'Delhi Metro services on the Yellow Line were disrupted for two hours due to a technical fault in the signaling system.'
      },
      {
        id: 3,
        title: 'New cultural hub to be built in South Delhi, announces LG',
        image: 'https://via.placeholder.com/300x200?text=Delhi+Culture',
        summary: 'The Lieutenant Governor has announced plans for a new cultural hub in South Delhi to promote arts and culture.'
      }
    ],
    Mumbai: [
      {
        id: 1,
        title: 'BMC unveils new coastal road project timeline',
        image: 'https://via.placeholder.com/300x200?text=Mumbai+Road',
        summary: 'The Brihanmumbai Municipal Corporation has revealed the updated timeline for the completion of the coastal road project.'
      },
      {
        id: 2,
        title: 'Local trains to get new air-conditioned coaches from next month',
        image: 'https://via.placeholder.com/300x200?text=Mumbai+Train',
        summary: 'Western Railway announces addition of new air-conditioned coaches to Mumbai local trains starting next month.'
      },
      {
        id: 3,
        title: 'Dharavi redevelopment project gets final approval',
        image: 'https://via.placeholder.com/300x200?text=Mumbai+Dharavi',
        summary: 'The long-awaited Dharavi redevelopment project has received final approval from the state government.'
      }
    ],
    Bangalore: [
      {
        id: 1,
        title: 'Bengaluru traffic police introduce AI cameras at major junctions',
        image: 'https://via.placeholder.com/300x200?text=Bangalore+Traffic',
        summary: 'AI-powered cameras installed at major traffic junctions in Bengaluru to detect violations and improve traffic management.'
      },
      {
        id: 2,
        title: 'New tech park to create 20,000 jobs in Electronic City',
        image: 'https://via.placeholder.com/300x200?text=Bangalore+Tech',
        summary: 'A new technology park in Electronic City is expected to generate approximately 20,000 jobs in the IT sector.'
      },
      {
        id: 3,
        title: 'BBMP announces property tax revision for 2023-24',
        image: 'https://via.placeholder.com/300x200?text=Bangalore+Tax',
        summary: 'The Bruhat Bengaluru Mahanagara Palike has announced a revision in property tax rates for the financial year 2023-24.'
      }
    ],
    Hyderabad: [
      {
        id: 1,
        title: 'Hyderabad Metro extends service hours during festival season',
        image: 'https://via.placeholder.com/300x200?text=Hyderabad+Metro',
        summary: 'Hyderabad Metro Rail has announced extended service hours during the upcoming festival season to accommodate increased passenger traffic.'
      },
      {
        id: 2,
        title: 'IT corridor to get new flyover to ease congestion',
        image: 'https://via.placeholder.com/300x200?text=Hyderabad+Flyover',
        summary: 'A new flyover is being constructed in the IT corridor to ease traffic congestion during peak hours.'
      },
      {
        id: 3,
        title: 'Hussain Sagar cleanup drive launched by GHMC',
        image: 'https://via.placeholder.com/300x200?text=Hyderabad+Lake',
        summary: 'The Greater Hyderabad Municipal Corporation has launched a major cleanup drive for Hussain Sagar lake.'
      }
    ],
    Chennai: [
      {
        id: 1,
        title: 'Chennai Metro Phase II construction begins next week',
        image: 'https://via.placeholder.com/300x200?text=Chennai+Metro',
        summary: 'Construction work for Phase II of the Chennai Metro Rail project is scheduled to begin next week after all clearances were obtained.'
      },
      {
        id: 2,
        title: 'New desalination plant to boost water supply in southern suburbs',
        image: 'https://via.placeholder.com/300x200?text=Chennai+Water',
        summary: 'A new desalination plant is being set up to augment water supply to Chennai\'s southern suburbs.'
      },
      {
        id: 3,
        title: 'Marina Beach to get major facelift, announces CM',
        image: 'https://via.placeholder.com/300x200?text=Chennai+Beach',
        summary: 'The Chief Minister has announced a comprehensive renovation plan for Marina Beach to improve facilities and attractions.'
      }
    ],
    Kolkata: [
      {
        id: 1,
        title: 'East-West Metro corridor to be fully operational by December',
        image: 'https://via.placeholder.com/300x200?text=Kolkata+Metro',
        summary: 'The complete East-West Metro corridor in Kolkata is expected to be operational by December this year.'
      },
      {
        id: 2,
        title: 'New Ganga riverside promenade project gets green light',
        image: 'https://via.placeholder.com/300x200?text=Kolkata+River',
        summary: 'The state government has approved the development of a new promenade along the banks of the Ganges.'
      },
      {
        id: 3,
        title: 'Kolkata Port to undergo modernization worth 1,000 crores',
        image: 'https://via.placeholder.com/300x200?text=Kolkata+Port',
        summary: 'The Syama Prasad Mookerjee Port (formerly Kolkata Port) will undergo modernization with an investment of 1,000 crores.'
      }
    ]
  };
  
  const currentCityNews = cityNewsMap[city as keyof typeof cityNewsMap] || cityNewsMap.Delhi;

  return (
    <section className="city-news">
      <h2 className="section-title">{city} News</h2>
      
      <div className="city-news-grid">
        {currentCityNews.map(news => (
          <div key={news.id} className="city-news-card">
            <img src={news.image} alt={news.title} />
            <div className="news-content">
              <h4>{news.title}</h4>
              <p>{news.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CityNews;