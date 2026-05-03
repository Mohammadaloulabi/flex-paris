import { useState, useEffect } from 'react';
import '../styles/carousel.css';

const SignaletiqueImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const signImages = [
    new URL('../assets/images/Signs/eps_malinxenseigne_3999x2999.jpg', import.meta.url).href,
    new URL('../assets/images/Signs/geraldine_soufrologue.jpg', import.meta.url).href,
    new URL('../assets/images/Signs/whatsapp_image_2020-06-08_4.jpg', import.meta.url).href,
    new URL('../assets/images/Signs/whatsapp_image_2021-02-09.jpg', import.meta.url).href,
    new URL('../assets/images/Signs/whatsapp_image_2021-02-09_2.jpg', import.meta.url).href,
    new URL('../assets/images/Signs/whatsapp_image_2021-02-09_3.jpg', import.meta.url).href,
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % signImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, signImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + signImages.length) % signImages.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % signImages.length);
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
        {signImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image} alt={`Signalétique ${index + 1}`} />
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
        {signImages.map((_, index) => (
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

export default SignaletiqueImageCarousel;
