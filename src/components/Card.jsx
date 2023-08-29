import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, content, imageUrl }) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`} onClick={handleCardClick}>
      <div className="card-image">
        {expanded ? null : <img src={imageUrl} alt={title} />}
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        {expanded && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Card;
