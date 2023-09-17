import React from 'react';
import './Project.css';

const Project = ({ title, imageUrl, description, bulletPoints, link}) => {
  const boldText = '<strong>bold</strong>';

  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="project-details">
          <h3>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              ) : (
                title
              )}
            </h3>
          <p dangerouslySetInnerHTML={{ __html: description.replace('bold', boldText) }}></p>
          {bulletPoints && (
            <ul>
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
