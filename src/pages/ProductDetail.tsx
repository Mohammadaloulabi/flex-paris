import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import belleAmeImg from '../assets/images/Boutique/belle âme done.webp'
import etiquettesImg from '../assets/images/Boutique/final flix logo  33 diagonal .webp'
import cartesImg from '../assets/images/Boutique/remy verso 11.webp'
import { useCart } from '../context/CartContext'
import '../styles/pages.css'

type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  reference: string
  details: string[]
  sizes?: string[]
  colors?: string[]
}

const PRODUCTS: Record<string, Product> = {
  'belle-ame': {
    id: 'belle-ame',
    name: 'BELLE AME',
    description: 'sweatshirt avec capuche',
    price: 35.0,
    image: belleAmeImg,
    reference: 'SSAC-23BA',
    details: [
      'SWEAT SHIRT A CAPUCHE 320 GR/M2 AVEC POCHES',
      'Sweat shirt à capuche',
      'Manches longues',
      'Poche kangourou',
      'Capuche doublée',
      'Cordon de serrage ton sur ton finition métal',
      '70% Coton - 30% Polyester',
      'Molleton 320 Gr./m²',
      'Sans étiquette',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['NOIR', 'BLANC', 'GRIS', 'ROSE', 'ROUGE', 'VERT', 'JAUNE'],
  },
  '100-etiquettes': {
    id: '100-etiquettes',
    name: '100 ETIQUETTES',
    description: 'Adhésive mat ou brilllant de 1 à 3cm',
    price: 10.0,
    image: etiquettesImg,
    reference: 'ET3',
    details: ['Etiquette adhesif COUPE DROITE'],
  },
  'cartes-visite-express': {
    id: 'cartes-visite-express',
    name: 'CARTES DE VISITE EXPRESS',
    description: 'FOURNIS EN 24H',
    price: 30.0,
    image: cartesImg,
    reference: 'CDVRV',
    details: [
      'Papier 350g',
      'Impression recto verso',
      'dispo sous 24 heures',
    ],
  },
  '1000-cartes-visite': {
    id: '1000-cartes-visite',
    name: '1000 CARTES DE VISITE',
    description: 'LIVRÉES EN 7 JOURS OUVRABLES',
    price: 110.0,
    image: cartesImg,
    reference: 'CDVRV',
    details: [
      'Papier 350g',
      'Impression recto verso',
      'Pelicullage Brillant ou mat ou soft touche',
    ],
  },
}

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>()
  const product = productId ? PRODUCTS[productId] : undefined
  const { addItem } = useCart()
  const navigate = useNavigate()

  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  if (!product) {
    return (
      <div className="product-detail-page">
        <p>Produit introuvable.</p>
        <Link to="/boutique" className="btn-back">Retour à la boutique</Link>
      </div>
    )
  }

  // Initialize size/color after product check
  const defaultSize = product.sizes?.[0] ?? ''
  const defaultColor = product.colors?.[0] ?? ''
  if (size === '' && defaultSize) setSize(defaultSize)
  if (color === '' && defaultColor) setColor(defaultColor)

  function handleAddToCart() {
    addItem({
      id: product!.id,
      name: product!.name,
      description: product!.description,
      price: product!.price,
      image: product!.image,
      size,
      color,
      quantity: 1,
    })
    setShowPopup(true)
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail__layout">
        <img src={product.image} alt={product.name} className="product-detail__img" loading="lazy" />

        <div className="product-detail__info">
          <h1 className="product-detail__name">{product.name}</h1>
          <p className="product-detail__desc">{product.description}</p>
          <p className="product-detail__price">{product.price.toFixed(2)} €</p>

          <ul className="product-detail__specs">
            {product.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>

          <p className="product-detail__ref">Référence : {product.reference}</p>

          {product.sizes && product.sizes.length > 0 && product.colors && product.colors.length > 0 && (
            <div className="product-detail__selects">
              <label className="product-detail__label">
                TAILLE
                <select value={size} onChange={(e) => setSize(e.target.value)} className="product-detail__select">
                  {product.sizes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </label>
              <label className="product-detail__label">
                COULEUR
                <select value={color} onChange={(e) => setColor(e.target.value)} className="product-detail__select">
                  {product.colors.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </label>
            </div>
          )}

          <button type="button" className="btn-primary product-detail__add" onClick={handleAddToCart}>
            Ajouter au panier
          </button>

          <Link to="/boutique" className="btn-back product-detail__back">
            Retour à la boutique
          </Link>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p className="popup__msg">Produit ajouté au panier&nbsp;!</p>
            <p className="popup__question">Voulez-vous aller au panier ?</p>
            <div className="popup__actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => { setShowPopup(false); navigate('/cart') }}
              >
                Voir le panier
              </button>
              <button
                type="button"
                className="btn-back"
                onClick={() => setShowPopup(false)}
              >
                Continuer mes achats
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
