import { useState, useEffect } from 'react';
import '../styles/carousel.css';

const CarImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const carImages = [
    new URL('../assets/images/cars/Camions_vue_AR.jpeg', import.meta.url).href,
    new URL('../assets/images/cars/CAMIONS_VUE_PROFIL.jpeg', import.meta.url).href,
    new URL('../assets/images/cars/DOBLO_VUE_AR.jpeg', import.meta.url).href,
    new URL('../assets/images/cars/DOBLO_VUE_PROFIL.jpeg', import.meta.url).href,
    new URL('../assets/images/cars/IMG_0004.jpeg', import.meta.url).href,
    new URL('../assets/images/cars/IMG_0006.jpeg', import.meta.url).href,
    new URL('../assets/images/cars/IMG_0073.jpg', import.meta.url).href,
    new URL('../assets/images/cars/IMG_0074.jpg', import.meta.url).href,
    new URL('../assets/images/cars/IMG_2050.jpeg', import.meta.url).href,
    new URL('../assets/images/cars/IMG_2051.jpeg', import.meta.url).href,
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, carImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + carImages.length) % carImages.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carImages.length);
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
        {carImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image} alt={`Car ${index + 1}`} />
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
        {carImages.map((_, index) => (
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

export default CarImageCarousel;
