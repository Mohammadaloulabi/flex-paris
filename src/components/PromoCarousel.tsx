import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import tshirtNoir    from '../assets/images/Clothing/T-shirt-noir.gif'
import gold6         from '../assets/images/Foiling/gold-6.jpg'
import panneauPromo  from '../assets/images/print/panneau_promo-bifteck.jpg'
import whatsapp      from '../assets/images/Signs/whatsapp_image_2021-02-09.jpg'
import rua           from '../assets/images/web-sites/RUA.jpg'
import flyer         from '../assets/images/create/flyer_a5_r_royal_imp.jpg'

const SLIDES = [
  { img: tshirtNoir,   label: 'Vêtement',    to: '/vetement'    },
  { img: gold6,        label: 'Dorure',       to: '/dorure'      },
  { img: panneauPromo, label: 'Impression',   to: '/impression'  },
  { img: whatsapp,     label: 'Signalétique', to: '/signaletique'},
  { img: rua,          label: 'Site Web',     to: '/site-web'    },
  { img: flyer,        label: 'Création',     to: '/creation'    },
]

export default function PromoCarousel() {
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(2)
  const trackRef = useRef<HTMLDivElement>(null)

  // Responsive: 1 card on mobile, 2 on desktop
  useEffect(() => {
    function update() { setPerView(window.innerWidth < 640 ? 1 : 2) }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = SLIDES.length - perView

  function prev() { setIndex((i) => Math.max(i - 1, 0)) }
  function next() { setIndex((i) => Math.min(i + 1, maxIndex)) }

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex)
  }, [perView, maxIndex, index])

  return (
    <section className="promo-section">
      <div className="promo-section__header">
        <span className="promo-section__badge">OFFRE LIMITÉE</span>
        <h2 className="promo-section__title">30% de réduction sur nos produits</h2>
        <p className="promo-section__sub">Profitez de nos meilleures offres sur une sélection de services</p>
      </div>

      <div className="promo-carousel">
        <button
          type="button"
          className="promo-carousel__btn"
          onClick={prev}
          disabled={index === 0}
          aria-label="Précédent"
        >
          ‹
        </button>

        <div className="promo-carousel__window">
          <div
            ref={trackRef}
            className="promo-carousel__track"
            style={{ transform: `translateX(calc(-${index} * (100% / ${perView} + 16px / ${perView})))` }}
          >
            {SLIDES.map((slide) => (
              <div key={slide.label} className="promo-card">
                <div className="promo-card__img-wrap">
                  <img src={slide.img} alt={slide.label} className="promo-card__img" loading="lazy" />
                  <span className="promo-card__discount">-30%</span>
                </div>
                <div className="promo-card__body">
                  <p className="promo-card__label">{slide.label}</p>
                  <Link to={slide.to} className="promo-card__cta">Voir l'offre</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="promo-carousel__btn"
          onClick={next}
          disabled={index >= maxIndex}
          aria-label="Suivant"
        >
          ›
        </button>
      </div>

      <div className="promo-carousel__dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            type="button"
            className={`promo-dot${i === index ? ' promo-dot--active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Aller à ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
