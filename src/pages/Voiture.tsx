import { useNavigate } from "react-router-dom";
import CarImageCarousel from "../components/CarImageCarousel";
import "../styles/pages.css";

const voitureLogo = new URL(
  "../assets/images/icons/Sans-titre---6.png",
  import.meta.url
).href;

export default function Voiture() {
  const navigate = useNavigate();

  return (
    <div className="voiture-page">
      <div className="page-header">
        <img src={voitureLogo} alt="Voiture Logo" className="page-logo" />
        <h1>Voiture</h1>
      </div>

      <section className="carousel-section">
        <CarImageCarousel />
      </section>

      <div className="page-actions">
        <button
          className="btn-back"
          onClick={() => navigate("/")}
          aria-label="Retour à l'accueil"
        >
          ← Retour à l'accueil
        </button>
      </div>
    </div>
  );
}
