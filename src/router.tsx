import { createHashRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';

const Accueil = lazy(() => import('./pages/Accueil'));
const Boutique = lazy(() => import('./pages/Boutique'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Voiture = lazy(() => import('./pages/Voiture'));
const Contact = lazy(() => import('./pages/Contact'));
const Création = lazy(() => import('./pages/Création'));
const Déco = lazy(() => import('./pages/Déco'));
const Découpe = lazy(() => import('./pages/Découpe'));
const Dorure = lazy(() => import('./pages/Dorure'));
const Impression = lazy(() => import('./pages/Impression'));
const Signalétique = lazy(() => import('./pages/Signalétique'));
const Vêtement = lazy(() => import('./pages/Vêtement'));
const SiteWeb = lazy(() => import('./pages/SiteWeb'));
const Société = lazy(() => import('./pages/Société'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Accueil /> },
      { path: 'boutique', element: <Boutique /> },
      { path: 'boutique/:productId', element: <ProductDetail /> },
      { path: 'cart', element: <Cart /> },
      { path: 'voiture', element: <Voiture /> },
      { path: 'contact', element: <Contact /> },
      { path: 'creation', element: <Création /> },
      { path: 'deco', element: <Déco /> },
      { path: 'decoupe', element: <Découpe /> },
      { path: 'dorure', element: <Dorure /> },
      { path: 'impression', element: <Impression /> },
      { path: 'signaletique', element: <Signalétique /> },
      { path: 'vetement', element: <Vêtement /> },
      { path: 'site-web', element: <SiteWeb /> },
      { path: 'societe', element: <Société /> },
    ],
  },
];

export const router = createHashRouter(routes);
