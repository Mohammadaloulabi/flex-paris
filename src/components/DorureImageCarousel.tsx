import { useState, useEffect } from 'react';
import '../styles/carousel.css';

const DorureImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const goldImages = [
    new URL('../assets/images/Foiling/gold-6.jpg', import.meta.url).href,
    new URL('../assets/images/Foiling/img_3191-gold-5.jpg', import.meta.url).href,
    new URL('../assets/images/Foiling/img_5015-gold-4.jpg', import.meta.url).href,
    new URL('../assets/images/Foiling/img_5016-gold-3.jpg', import.meta.url).href,
    new URL('../assets/images/Foiling/img_5017-gold-2.jpg', import.meta.url).href,
    new URL('../assets/images/Foiling/img_5018-gold-1.jpg', import.meta.url).href,
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % goldImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, goldImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + goldImages.length) % goldImages.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % goldImages.length);
    setAutoPlay(false);
  };

  const handleMouseEnter = () => {
    setAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setAutoPlay(true);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-slider">
        {goldImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image} alt={`Dorure ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="carousel-control prev" onClick={goToPrev}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={goToNext}>
        &#10095;
      </button>

      <div className="carousel-indicators">
        {goldImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DorureImageCarousel;
