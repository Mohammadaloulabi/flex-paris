import { Link } from 'react-router-dom'
import flixLogo from '../assets/images/icons/FLIX_LOGO.png'

export default function Contact() {
  return (
    <div className="contact-page">
      <img src={flixLogo} alt="Flix logo" className="contact-logo" />

      <div className="contact-blocks">
        <div className="contact-block">
          <h2>Siège</h2>
          <p className="contact-name">FLIX</p>
          <p>66, AV DES CHAMPS ELYSEES</p>
          <p>75008 PARIS</p>
        </div>

        <div className="contact-block">
          <h2>Atelier</h2>
          <p className="contact-name">PA NATIVELLE</p>
          <p>1, CHEMIN DE SAULXIER</p>
          <p>91160 LONGJUMEAU</p>
        </div>
      </div>

      <Link to="/" className="btn-back">Retour à l'accueil</Link>
    </div>
  )
}
