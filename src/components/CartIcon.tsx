import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from '../styles/CartIcon.module.css';

export default function CartIcon() {
  const { totalItems } = useCart();

  return (
    <NavLink to="/cart" className={styles.cartIcon} aria-label={`Cart with ${totalItems} items`}>
      <span className={styles.emoji}>🛒</span>
      {totalItems > 0 && (
        <span className={styles.badge}>
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </NavLink>
  );
}
