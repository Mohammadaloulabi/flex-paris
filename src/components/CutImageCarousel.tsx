import { useState, useEffect } from 'react';
import '../styles/carousel.css';

const CutImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const cutImages = [
    new URL('../assets/images/cut/19_les_sacs_en_papier_omercado_market.jpg', import.meta.url).href,
    new URL('../assets/images/cut/boulangerie_corbeil_vitrine.jpg', import.meta.url).href,
    new URL('../assets/images/cut/boulangerie_terrasse_v2.jpg', import.meta.url).href,
    new URL('../assets/images/cut/fiche_lpa_1.jpg', import.meta.url).href,
    new URL('../assets/images/cut/geraldine_soufrologue.jpg', import.meta.url).href,
    new URL('../assets/images/cut/gs_cdv_ibrahim_recto.jpg', import.meta.url).href,
    new URL('../assets/images/cut/logo3_pro_emba_tel.jpg', import.meta.url).href,
    new URL('../assets/images/cut/logo_2022.jpg', import.meta.url).href,
    new URL('../assets/images/cut/logo_avec_fond.jpg', import.meta.url).href,
    new URL('../assets/images/cut/mawade_colone1.jpg', import.meta.url).href,
    new URL('../assets/images/cut/mawade_logo_violet.jpg', import.meta.url).href,
    new URL('../assets/images/cut/mawade_menu_board.jpg', import.meta.url).href,
    new URL('../assets/images/cut/nhs_bache_100x100_v2.jpg', import.meta.url).href,
    new URL('../assets/images/cut/shamyat-logo-final.jpg', import.meta.url).href,
    new URL('../assets/images/cut/souk-enseigne_haute.jpg', import.meta.url).href,
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cutImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, cutImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + cutImages.length) % cutImages.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % cutImages.length);
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
        {cutImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image} alt={`Découpe ${index + 1}`} />
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
        {cutImages.map((_, index) => (
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

export default CutImageCarousel;
