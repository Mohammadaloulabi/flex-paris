import { useNavigate } from "react-router-dom";
import SignaletiqueImageCarousel from "../components/SignaletiqueImageCarousel";
import "../styles/pages.css";

const signaletiqueLogo = new URL(
  "../assets/images/icons/FLIX_SIGNE.png",
  import.meta.url,
).href;

export default function Signalétique() {
  const navigate = useNavigate();

  return (
    <div className="voiture-page">
      <div className="page-header">
        <img src={signaletiqueLogo} alt="Signalétique Logo" className="page-logo" />
        <h1>Signalétique</h1>
      </div>

      <section className="carousel-section">
        <SignaletiqueImageCarousel />
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
