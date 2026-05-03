import { useNavigate } from "react-router-dom";
import DorureImageCarousel from "../components/DorureImageCarousel";
import "../styles/pages.css";

const dorureLogo = new URL(
  "../assets/images/icons/FLIX_GOLD_(1).png",
  import.meta.url,
).href;

export default function Dorure() {
  const navigate = useNavigate();

  return (
    <div className="voiture-page">
      <div className="page-header">
        <img src={dorureLogo} alt="Dorure Logo" className="page-logo" />
        <h1>Dorure</h1>
      </div>

      <section className="carousel-section">
        <DorureImageCarousel />
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
