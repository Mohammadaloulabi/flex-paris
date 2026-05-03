import { useNavigate } from "react-router-dom";
import ClothingImageCarousel from "../components/ClothingImageCarousel";
import "../styles/pages.css";

const vetementLogo = new URL(
  "../assets/images/icons/FLIX_TEX_(1).png",
  import.meta.url,
).href;

export default function Vêtement() {
  const navigate = useNavigate();

  return (
    <div className="voiture-page">
      <div className="page-header">
        <img src={vetementLogo} alt="Vêtement Logo" className="page-logo" />
        <h1>Vêtement</h1>
      </div>

      <section className="carousel-section">
        <ClothingImageCarousel />
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
