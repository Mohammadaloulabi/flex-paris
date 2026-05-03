import { Link } from 'react-router-dom'
import belleAmeImg from '../assets/images/Boutique/belle âme done.webp'
import etiquettesImg from '../assets/images/Boutique/final flix logo  33 diagonal .webp'
import cartesImg from '../assets/images/Boutique/remy verso 11.webp'
import '../styles/pages.css'

const products = [
  {
    id: 'belle-ame',
    name: 'BELLE AME',
    description: 'sweatshirt avec capuche',
    price: 35.0,
    image: belleAmeImg,
  },
  {
    id: '100-etiquettes',
    name: '100 ETIQUETTES',
    description: 'Adhésive mat ou brilllant de 1 à 3cm',
    price: 10.0,
    image: etiquettesImg,
  },
  {
    id: 'cartes-visite-express',
    name: 'CARTES DE VISITE EXPRESS',
    description: 'FOURNIS EN 24H',
    price: 30.0,
    image: cartesImg,
  },
  {
    id: '1000-cartes-visite',
    name: '1000 CARTES DE VISITE',
    description: 'LIVRÉES EN 7 JOURS OUVRABLES',
    price: 110.0,
    image: cartesImg,
  },
]

export default function Boutique() {
  return (
    <div className="boutique-page">
      <h1 className="boutique-title">Boutique</h1>
      <div className="product-grid">
        {products.map((p) => (
          <Link key={p.id} to={`/boutique/${p.id}`} className="product-card">
            <img src={p.image} alt={p.name} className="product-card__img" loading="lazy" />
            <div className="product-card__body">
              <h3 className="product-card__name">{p.name}</h3>
              <p className="product-card__desc">{p.description}</p>
              <p className="product-card__price">{p.price.toFixed(2)} €</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
