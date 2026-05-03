import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/pages.css'

const DELIVERY_FEE = 5.9

export default function Cart() {
  const { items, updateQty, totalItems, clear } = useCart()
  const [ordered, setOrdered] = useState(false)

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const total = subtotal + (items.length > 0 ? DELIVERY_FEE : 0)

  function handleOrder() {
    clear()
    setOrdered(true)
  }

  if (ordered) {
    return (
      <div className="cart-page cart-page--success">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M7 13l3 3 7-7" />
        </svg>
        <h2>Commande envoyée avec succès !</h2>
        <Link to="/boutique" className="btn-primary">Retour à la boutique</Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="cart-page cart-page--empty">
        <p>Votre panier est vide.</p>
        <Link to="/boutique" className="btn-primary">Retour à la boutique</Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">
        Mon panier
        <span className="cart-title__count">{totalItems} article{totalItems > 1 ? 's' : ''}</span>
      </h1>

      <div className="cart-layout">
        <ul className="cart-items">
          {items.map((item) => (
            <li key={`${item.id}-${item.size}-${item.color}`} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item__img" loading="lazy" />
              <div className="cart-item__info">
                <p className="cart-item__name">{item.name}</p>
                <p className="cart-item__meta">Taille : {item.size} — Couleur : {item.color}</p>
                <p className="cart-item__unit">{item.price.toFixed(2)} € / unité</p>
              </div>
              <div className="cart-item__qty">
                <button type="button" onClick={() => updateQty(item.id, item.size, -1)} aria-label="Diminuer">−</button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => updateQty(item.id, item.size, 1)} aria-label="Augmenter">+</button>
              </div>
              <p className="cart-item__subtotal">{(item.price * item.quantity).toFixed(2)} €</p>
            </li>
          ))}
        </ul>

        <div className="cart-summary">
          <h2 className="cart-summary__title">Récapitulatif</h2>
          <div className="cart-summary__row">
            <span>Articles ({totalItems})</span>
            <span>{subtotal.toFixed(2)} €</span>
          </div>
          <div className="cart-summary__row">
            <span>Livraison</span>
            <span>{DELIVERY_FEE.toFixed(2)} €</span>
          </div>
          <div className="cart-summary__row cart-summary__row--total">
            <span>Total</span>
            <span>{total.toFixed(2)} €</span>
          </div>
          <button type="button" className="btn-primary cart-summary__btn" onClick={handleOrder}>
            Passer la commande
          </button>
          <Link to="/boutique" className="btn-back cart-summary__back">
            Continuer mes achats
          </Link>
        </div>
      </div>
    </div>
  )
}
