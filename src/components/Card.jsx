import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, intro, imageUrl, }) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`} onClick={handleCardClick}>
      <div className="card-image">
        {expanded ? null : <img src={imageUrl} draggable={false} alt={title} />}
      </div>
      {expanded ? null : <h2>{title}</h2>}
      <div className="card-content">
        {expanded && <img src={imageUrl} draggable={false} alt={title} />}
        <div className = "card-text">
          {expanded && <p className="intro">{intro}</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
