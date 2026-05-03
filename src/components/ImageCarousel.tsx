import { useState, useEffect } from 'react';
import '../styles/carousel.css';

interface CarouselSlide {
  image: string;
  title: string;
  folder: string;
}

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides: CarouselSlide[] = [
    {
      image: new URL('../assets/images/Boutique/belle âme done.webp', import.meta.url).href,
      title: 'Boutique',
      folder: 'Boutique',
    },
    {
      image: new URL('../assets/images/cars/Camions_vue_AR.jpeg', import.meta.url).href,
      title: 'Voiture',
      folder: 'Cars',
    },
    {
      image: new URL('../assets/images/Clothing/Men_Tshirt.jpg', import.meta.url).href,
      title: 'Vêtement',
      folder: 'Clothing',
    },
    {
      image: new URL('../assets/images/create/boulangerie_corbeil_vitrine.jpg', import.meta.url).href,
      title: 'Création',
      folder: 'Create',
    },
    {
      image: new URL('../assets/images/cut/boulangerie_corbeil_vitrine.jpg', import.meta.url).href,
      title: 'Découpe',
      folder: 'Cut',
    },
    {
      image: new URL('../assets/images/dicore/deco_restau_100x100_gokane.jpg', import.meta.url).href,
      title: 'Déco',
      folder: 'Dicore',
    },
    {
      image: new URL('../assets/images/Foiling/gold-6.jpg', import.meta.url).href,
      title: 'Dorure',
      folder: 'Foiling',
    },
    {
      image: new URL('../assets/images/print/amas_et_pub.jpg', import.meta.url).href,
      title: 'Impression',
      folder: 'Print',
    },
    {
      image: new URL('../assets/images/Signs/geraldine_soufrologue.jpg', import.meta.url).href,
      title: 'Signalétique',
      folder: 'Signs',
    },
    {
      image: new URL('../assets/images/web-sites/web-site.jpg', import.meta.url).href,
      title: 'Site Web',
      folder: 'Web Sites',
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
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
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="carousel-caption">
              <h2>{slide.title}</h2>
            </div>
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
        {slides.map((_, index) => (
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

export default ImageCarousel;
