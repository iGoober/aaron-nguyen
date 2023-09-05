import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleImageClick = (e) => {
    const containerWidth = e.currentTarget.offsetWidth;
    const clickX = e.nativeEvent.offsetX;
    const halfWidth = containerWidth / 2;
    if (clickX < halfWidth) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel">
      <div className="image-container">
        <div className="section-buttons">
          <button onClick={() => scrollToSection('about-section')}>About</button>
          <button onClick={() => scrollToSection('work-section')}>Work</button>
          <button onClick={() => scrollToSection('contact-section')}>Contact</button>
        </div>
        <img
          onClick={handleImageClick}
          draggable={false}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
        />
        <div className="carousel-slides">
          {images.map((_, index) => (
            <div
              key={index}
              className={`carousel-slide-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <div className="image-text">Hi, I'm</div>
        <div className="name">Aaron Nguyen</div>
      </div>
    </div>
  );
};

export default Carousel;
