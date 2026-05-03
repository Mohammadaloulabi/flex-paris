import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import PromoCarousel from "../components/PromoCarousel";
import PromoCountdown from "../components/PromoCountdown";
import "../styles/pages.css";

const icons = {
  voiture: new URL("../assets/images/icons/FLIX_CUT_(2).png", import.meta.url)
    .href,
  vetement: new URL("../assets/images/icons/FLIX_TEX_(1).png", import.meta.url)
    .href,
  signaletique: new URL(
    "../assets/images/icons/FLIX_SIGNE.png",
    import.meta.url,
  ).href,
  impression: new URL(
    "../assets/images/icons/FLIX_PRINT_(1).png",
    import.meta.url,
  ).href,
  creation: new URL("../assets/images/icons/FLIX_CREA_(1).png", import.meta.url)
    .href,
  dorure: new URL("../assets/images/icons/FLIX_GOLD_(1).png", import.meta.url)
    .href,
  dorureAlt: new URL("../assets/images/icons/FLIX_WEB_(1).png", import.meta.url)
    .href,
  dorureExtra: new URL(
    "../assets/images/icons/FLIX_DECO_(1).png",
    import.meta.url,
  ).href,
  fallback: new URL(
    "../assets/images/icons/Sans-titre---6.png",
    import.meta.url,
  ).href,
};

export default function Accueil() {
  return (
    <div className="accueil-page">
      <PromoCountdown />
      <section className="hero-section">
        <ImageCarousel />
        <div className="hero-content">
          <h1>Bienvenue chez Flex Paris</h1>
          <p className="hero-subtitle">
            Votre partenaire créatif pour tous vos projets d'impression et de
            marquage
          </p>
          <button className="btn-primary">Découvrir nos services</button>
        </div>
      </section>

      <section className="services-preview">
        <h2>Nos Services</h2>
        <div className="services-grid">
          <Link to="/decoupe" className="service-card">
            <img
              className="service-card-icon"
              src={icons.voiture}
              alt="Découpe icon"
              onError={(event) => {
                const target = event.currentTarget as HTMLImageElement;
                if (target.src !== icons.fallback) target.src = icons.fallback;
              }}
            />
            <h3>Découpe</h3>
          </Link>
          <Link to="/vetement" className="service-card">
            <img
              className="service-card-icon"
              src={icons.vetement}
              alt="Vêtement icon"
              onError={(event) => {
                const target = event.currentTarget as HTMLImageElement;
                if (target.src !== icons.fallback) target.src = icons.fallback;
              }}
            />
            <h3>Vêtement</h3>
          </Link>
          <Link to="/signaletique" className="service-card">
            <img
              className="service-card-icon"
              src={icons.signaletique}
              alt="Signalétique icon"
              onError={(event) => {
                const target = event.currentTarget as HTMLImageElement;
                if (target.src !== icons.fallback) target.src = icons.fallback;
              }}
            />
            <h3>Signalétique</h3>
          </Link>
          <Link to="/impression" className="service-card">
            <img
              className="service-card-icon"
              src={icons.impression}
              alt="Impression icon"
              onError={(event) => {
                const target = event.currentTarget as HTMLImageElement;
                if (target.src !== icons.fallback) target.src = icons.fallback;
              }}
            />
            <h3>Impression</h3>
          </Link>
          <Link to="/creation" className="service-card">
            <img
              className="service-card-icon"
              src={icons.creation}
              alt="Création icon"
              onError={(event) => {
                const target = event.currentTarget as HTMLImageElement;
                if (target.src !== icons.fallback) target.src = icons.fallback;
              }}
            />
            <h3>Création</h3>
          </Link>
          <Link to="/dorure" className="service-card">
            <img
              className="service-card-icon"
              src={icons.dorure}
              alt="Dorure icon"
              onError={(event) => {
                const target = event.currentTarget as HTMLImageElement;
                if (target.src !== icons.fallback) target.src = icons.fallback;
              }}
            />
            <h3>Dorure</h3>
          </Link>
          <Link to="/site-web" className="service-card">
            <img
              className="service-card-icon"
              src={icons.dorureAlt}
              alt="Site Web icon"
              onError={(event) => {
                const target = event.currentTarget as HTMLImageElement;
                if (target.src !== icons.fallback) target.src = icons.fallback;
              }}
            />
            <h3>Site Web</h3>
          </Link>
          <Link to="/deco" className="service-card">
            <img
              className="service-card-icon"
              src={icons.dorureExtra}
              alt="Déco icon"
              onError={(event) => {
                const target = event.currentTarget as HTMLImageElement;
                if (target.src !== icons.fallback) target.src = icons.fallback;
              }}
            />
            <h3>Déco</h3>
          </Link>
          <Link to="/voiture" className="service-card">
            <img
              className="service-card-icon"
              src={icons.fallback}
              alt="Voiture icon"
            />
            <h3>Voiture</h3>
          </Link>
        </div>
      </section>

      <PromoCarousel />
    </div>
  );
}
