import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isMouseHeld, setIsMouseHeld] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsMouseHeld(true);
    setIsDragging(false); 
  };

  const handleMouseMove = (e) => {
    if (!isMouseHeld || isDragging) return;
    const deltaX = e.clientX - startX;
    if (deltaX > 50) {
      prevSlide();
      setIsMouseHeld(false);
    } else if (deltaX < -50) {
      nextSlide();
      setIsMouseHeld(false);
    }
  };

  const handleMouseUp = () => {
    setIsMouseHeld(false);
  };

  return (
    <div
      className="carousel"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="carousel-slides">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel-slide-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <img
        draggable={false} 
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
      />
    </div>
  );
};

export default Carousel;
