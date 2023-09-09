import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, content, intro, imageUrl, item1, item2, item3, item4 }) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`} onClick={handleCardClick}>
      <div className="card-image">
        {expanded ? null : <img src={imageUrl} draggable={false} alt={title} />}
      </div>
      <div className="card-content">
        {expanded ? null : <h2>{title}</h2>}
        {expanded && <img src={imageUrl} draggable={false} alt={title} />}
        <div className = "card-text">
          {expanded && <p className="intro">{intro}</p>}
          {expanded && <p>{content}</p>}
          {expanded && (
          <ul className="list">
            <li>{item1}</li>
            <li>{item2}</li>
            <li>{item3}</li>
            <li>{item4}</li>
          </ul>
        )}
        </div>
      </div>
    </div>
  );
};

export default Card;
