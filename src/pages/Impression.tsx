import { useNavigate } from "react-router-dom";
import PrintImageCarousel from "../components/PrintImageCarousel";
import "../styles/pages.css";

const impressionLogo = new URL(
  "../assets/images/icons/FLIX_PRINT_(1).png",
  import.meta.url,
).href;

export default function Impression() {
  const navigate = useNavigate();

  return (
    <div className="voiture-page">
      <div className="page-header">
        <img src={impressionLogo} alt="Impression Logo" className="page-logo" />
        <h1>Impression</h1>
      </div>

      <section className="carousel-section">
        <PrintImageCarousel />
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
