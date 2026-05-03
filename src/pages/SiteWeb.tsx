import { useNavigate } from "react-router-dom";
import SiteWebImageCarousel from "../components/SiteWebImageCarousel";
import "../styles/pages.css";

const siteWebLogo = new URL(
  "../assets/images/icons/FLIX_WEB_(1).png",
  import.meta.url,
).href;

export default function SiteWeb() {
  const navigate = useNavigate();

  return (
    <div className="voiture-page">
      <div className="page-header">
        <img src={siteWebLogo} alt="Site Web Logo" className="page-logo" />
        <h1>Site Web</h1>
      </div>

      <section className="carousel-section">
        <SiteWebImageCarousel />
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
