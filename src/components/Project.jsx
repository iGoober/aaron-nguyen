import React from 'react';
import './Project.css';

const Project = ({ title, imageUrl, description, bulletPoints, additionalDescription }) => {
  const boldText = '<strong>bold</strong>';

  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="project-details">
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description.replace('bold', boldText) }}></p>
          {bulletPoints && (
            <ul>
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
          {additionalDescription && <p>{additionalDescription}</p>}
        </div>
      </div>
    </div>
  );
}

export default Project;
