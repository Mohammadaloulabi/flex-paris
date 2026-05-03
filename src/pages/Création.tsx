import { useNavigate } from "react-router-dom";
import CreateImageCarousel from "../components/CreateImageCarousel";
import "../styles/pages.css";

const creationLogo = new URL(
  "../assets/images/icons/FLIX_CREA_(1).png",
  import.meta.url
).href;

export default function Création() {
  const navigate = useNavigate();

  return (
    <div className="voiture-page">
      <div className="page-header">
        <img src={creationLogo} alt="Création Logo" className="page-logo" />
        <h1>Création</h1>
      </div>

      <section className="carousel-section">
        <CreateImageCarousel />
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
