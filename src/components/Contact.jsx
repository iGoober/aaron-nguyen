import React from 'react';
import './Contact.css';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import instagramIcon from '../assets/instagram.png';
import emailIcon from '../assets/google.png';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-buttons">
        <a href="mailto:nguyengochien3@gmail.com" className="contact-button">
          <img src={emailIcon} alt="Aaron's Email" />
        </a>
        <a href="https://www.instagram.com/gooberjr/" className="contact-button">
          <img src={instagramIcon} alt="Aaron's Instagram" />
        </a>
        <a href="https://github.com/iGoober" className="contact-button">
          <img src={githubIcon} alt="Aaron's Github" />
        </a>
        <a href="https://www.linkedin.com/in/aaronwin" className="contact-button">
          <img src={linkedinIcon} alt="Aaron's LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
