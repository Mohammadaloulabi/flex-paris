import { useState, useEffect } from 'react';
import '../styles/carousel.css';

const DecoImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const decoImages = [
    new URL('../assets/images/dicore/17630178_1865091350445236_1898078706341727260_n.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/2019-07-24_15.40.19.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/2019-07-24_21.43.39.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/2019-07-24_21.43.56.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/916dd92a-db49-49ff-80fc-674a31f956e7.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/deco_restau_100x100_gokane.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/deco_restau_1_gokane.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/deco_restau_2_gokane.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/deco_restau_3_gokane.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/deco_restau_4_gokane.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/f17a64e1-2d22-4916-b6a0-968eae6e8a4f.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/ff5427b0-d3f5-4634-af3f-97a23d82d955.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_0280.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_0310.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_0365.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_0366.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_0367.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_0622.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_0767.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_0782.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_0875.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_1219.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_2983.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_2988.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_3935.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_4494.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_4497.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5058.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5120.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5256.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5298 (1).jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5298.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5388.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5405.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5412.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5414.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5415.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5984.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5985.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5986.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5987.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5988.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5991.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5999 (1).jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_5999.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/img_6011.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/unadjustednonraw_thumb_202d.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/unadjustednonraw_thumb_2054.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/unadjustednonraw_thumb_2075.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/unadjustednonraw_thumb_2242 (1).jpg', import.meta.url).href,
    new URL('../assets/images/dicore/unadjustednonraw_thumb_2242.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/unadjustednonraw_thumb_2244.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/unadjustednonraw_thumb_d6e.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/unadjustednonraw_thumb_d9e.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/unadjustednonraw_thumb_da4.jpg', import.meta.url).href,
    new URL('../assets/images/dicore/unadjustednonraw_thumb_fbf.jpg', import.meta.url).href,
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % decoImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, decoImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + decoImages.length) % decoImages.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % decoImages.length);
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
        {decoImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image} alt={`Déco ${index + 1}`} />
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
        {decoImages.map((_, index) => (
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

export default DecoImageCarousel;
