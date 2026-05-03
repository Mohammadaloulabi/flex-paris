import { useState, useEffect } from 'react';
import '../styles/carousel.css';

const CreateImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const createImages = [
    new URL('../assets/images/create/19_les_sacs_en_papier_omercado_market.jpg', import.meta.url).href,
    new URL('../assets/images/create/amas_et_pub.jpg', import.meta.url).href,
    new URL('../assets/images/create/boulangerie_corbeil_vitrine.jpg', import.meta.url).href,
    new URL('../assets/images/create/boulangerie_terrasse_v2.jpg', import.meta.url).href,
    new URL('../assets/images/create/fiche_lpa_1.jpg', import.meta.url).href,
    new URL('../assets/images/create/flyer_a5_r_royal_imp (1).jpg', import.meta.url).href,
    new URL('../assets/images/create/flyer_a5_r_royal_imp.jpg', import.meta.url).href,
    new URL('../assets/images/create/geraldine_soufrologue.jpg', import.meta.url).href,
    new URL('../assets/images/create/gs_cdv_ibrahim_recto.jpg', import.meta.url).href,
    new URL('../assets/images/create/logo3_pro_emba_tel (1).jpg', import.meta.url).href,
    new URL('../assets/images/create/logo3_pro_emba_tel.jpg', import.meta.url).href,
    new URL('../assets/images/create/logo_2022.jpg', import.meta.url).href,
    new URL('../assets/images/create/logo_avec_fond.jpg', import.meta.url).href,
    new URL('../assets/images/create/lp_guide_des_touche_2022_v4.jpg', import.meta.url).href,
    new URL('../assets/images/create/mawade_colone1.jpg', import.meta.url).href,
    new URL('../assets/images/create/mawade_logo_violet.jpg', import.meta.url).href,
    new URL('../assets/images/create/mawade_menu_board.jpg', import.meta.url).href,
    new URL('../assets/images/create/melies_droite_lambrequin.jpg', import.meta.url).href,
    new URL('../assets/images/create/melies_modif_lambrequin (1).jpg', import.meta.url).href,
    new URL('../assets/images/create/melies_modif_lambrequin.jpg', import.meta.url).href,
    new URL('../assets/images/create/menuboard_vert.jpg', import.meta.url).href,
    new URL('../assets/images/create/panneau_promo-bifteck.jpg', import.meta.url).href,
    new URL('../assets/images/create/shamyat-logo-final_(1).jpg', import.meta.url).href,
    new URL('../assets/images/create/souk-enseigne_haute.jpg', import.meta.url).href,
    new URL('../assets/images/create/ts_cdv__boite_rv_final.jpg', import.meta.url).href,
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % createImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, createImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + createImages.length) % createImages.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % createImages.length);
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
        {createImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image} alt={`Creation ${index + 1}`} />
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
        {createImages.map((_, index) => (
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

export default CreateImageCarousel;
