import { useNavigate } from "react-router-dom";
import CutImageCarousel from "../components/CutImageCarousel";
import "../styles/pages.css";

const decoupeLogo = new URL(
  "../assets/images/icons/FLIX_CUT_(2).png",
  import.meta.url,
).href;

export default function Découpe() {
  const navigate = useNavigate();

  return (
    <div className="voiture-page">
      <div className="page-header">
        <img src={decoupeLogo} alt="Découpe Logo" className="page-logo" />
        <h1>Découpe</h1>
      </div>

      <section className="carousel-section">
        <CutImageCarousel />
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
