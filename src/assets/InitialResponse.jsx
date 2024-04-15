import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/InitialResponse.css';

const InitialResponse = () => {
  const navigate = useNavigate();

  // Dummy data for disasters
  const disasters = [
    {
      id: 1,
      name: "Earthquake",
      imageUrl: "/earth3.jpeg"
    },
    {
      id: 2,
      name: "Flood",
      imageUrl: "/flood3.jpeg"
    },
    {
      id: 3,
      name: "Wildfire",
      imageUrl: "/fire3.jpeg"
    },
    {
      id: 4,
      name: "Tornado",
      imageUrl: "/tornado3.jpeg"
    },
    {
      id: 5,
      name: "Hurricane",
      imageUrl: "/hurricane3.jpeg"
    },
    {
      id: 6,
      name: "Volcano",
      imageUrl: "/volcano3.jpeg"
    },
    {
      id: 7,
      name: "Tsunami",
      imageUrl: "/tsunami3.jpeg"
    }
  ];

  const handleCardClick = (disasterId) => {
    navigate(`/disaster/${disasterId}`);
  };

  return (
    <div className="disaster-page">
      <div className='anch'></div>
      <h1 className='disaster-title'>Disasters</h1>
      <div className="disaster-list">
        {disasters.map((disaster) => (
          <div
            key={disaster.id}
            className="card"
            onClick={() => handleCardClick(disaster.id)}
          >
            <Link to={`/disaster/${disaster.id}`} className="card-link">
              <div className="card-image">
                <img className="small-image" src={disaster.imageUrl} alt={disaster.name} />
              </div>
              <div className="card-content">
                <h3>{disaster.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitialResponse;