import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Suspense fallback={<div style={{ padding: '32px', textAlign: 'center' }}>Chargement...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </CartProvider>
  );
}

export default App;
