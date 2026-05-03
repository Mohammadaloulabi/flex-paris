import { useState, useEffect } from 'react';
import '../styles/carousel.css';

const ClothingImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const clothingImages = [
    new URL('../assets/images/Clothing/Blank_Men_tshirt.jpg', import.meta.url).href,
    new URL('../assets/images/Clothing/BSD_T-SHIRT.jpg', import.meta.url).href,
    new URL('../assets/images/Clothing/FILING_T-SHIRT.jpg', import.meta.url).href,
    new URL('../assets/images/Clothing/Hocin_IMG.png', import.meta.url).href,
    new URL('../assets/images/Clothing/Logo_clean_air_way.png', import.meta.url).href,
    new URL('../assets/images/Clothing/Men_Tshirt.jpg', import.meta.url).href,
    new URL('../assets/images/Clothing/PARADISE_KEBAB_TSHIRT.png', import.meta.url).href,
    new URL('../assets/images/Clothing/REGAL_T-shirt-noir_DEVANT.jpg', import.meta.url).href,
    new URL('../assets/images/Clothing/Screenshot.png', import.meta.url).href,
    new URL('../assets/images/Clothing/T-shirt-noir.gif', import.meta.url).href,
    new URL('../assets/images/Clothing/T-shirt-Vector-border.jpg', import.meta.url).href,
    new URL('../assets/images/Clothing/T-shirt_02-be-strong.jpg', import.meta.url).href,
    new URL('../assets/images/Clothing/T-shirt_06-calm.jpg', import.meta.url).href,
    new URL('../assets/images/Clothing/T-shirt_LUXURY.png', import.meta.url).href,
    new URL('../assets/images/Clothing/T-Shirt_Salon_1.jpg', import.meta.url).href,
    new URL('../assets/images/Clothing/T-Shirt__Polo1.jpg', import.meta.url).href,
    new URL('../assets/images/Clothing/TShirt-color.jpg', import.meta.url).href,
    new URL('../assets/images/Clothing/tshirt_coeur_big_marcus_viking.png', import.meta.url).href,
    new URL('../assets/images/Clothing/tshirt_dos_big_marcus_cup.png', import.meta.url).href,
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clothingImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, clothingImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + clothingImages.length) % clothingImages.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % clothingImages.length);
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
        {clothingImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image} alt={`Vêtement ${index + 1}`} />
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
        {clothingImages.map((_, index) => (
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

export default ClothingImageCarousel;
