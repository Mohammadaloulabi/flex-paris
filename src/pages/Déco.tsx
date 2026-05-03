import { useNavigate } from "react-router-dom";
import DecoImageCarousel from "../components/DecoImageCarousel";
import "../styles/pages.css";

const decoLogo = new URL(
  "../assets/images/icons/FLIX_DECO_(1).png",
  import.meta.url,
).href;

export default function Déco() {
  const navigate = useNavigate();

  return (
    <div className="voiture-page">
      <div className="page-header">
        <img src={decoLogo} alt="Déco Logo" className="page-logo" />
        <h1>Déco</h1>
      </div>

      <section className="carousel-section">
        <DecoImageCarousel />
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
