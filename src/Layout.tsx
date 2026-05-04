import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import CartIcon from "./components/CartIcon";
import "./styles/pages.css";
import "./styles/dark.css";

import enFlag from "./assets/images/en.png";
import frFlag from "./assets/images/fr.png";
import arFlag from "./assets/images/sy.png";

const flags = {
  en: enFlag,
  fr: frFlag,
  ar: arFlag
} as const;

const navItems = [
  { to: "/",            label: "Accueil"      },
  { to: "/boutique",    label: "Boutique"     },
  { to: "/voiture",     label: "Voiture"      },
  { to: "/contact",     label: "Contact"      },
  { to: "/creation",    label: "Création"     },
  { to: "/deco",        label: "Déco"         },
  { to: "/decoupe",     label: "Découpe"      },
  { to: "/dorure",      label: "Dorure"       },
  { to: "/impression",  label: "Impression"   },
  { to: "/signaletique",label: "Signalétique" },
  { to: "/vetement",    label: "Vêtement"     },
  { to: "/site-web",    label: "Site Web"     },
  { to: "/societe",     label: "Société"      },
];

function getInitialTheme(): "light" | "dark" {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Layout() {
const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);
  const [lang, setLang] = useState<'fr' | 'en' | 'ar'>('fr');
  const [langOpen, setLangOpen] = useState(false);

  const languages = [
{ code: 'fr' as const, name: 'Français', flag: flags.fr },
{ code: 'en' as const, name: 'English', flag: flags.en },
{ code: 'ar' as const, name: 'العربية', flag: flags.ar },
  ] as const;

  const currentLang = languages.find(l => l.code === lang)!;

  useEffect(() => {
    // Stub for future i18n: localStorage.setItem('lang', lang);
    console.log('Language changed to:', lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="brand">Flex Paris</div>

        <div className="header-controls">
          <button
            type="button"
            className="lang-switcher"
            onClick={() => setLangOpen(open => !open)}
            aria-label="Change language"
            aria-expanded={langOpen}
          >
            <img src={currentLang.flag} alt="" className="flag-img" width="22" height="22" />
            <span>{currentLang.code.toUpperCase()}</span>
          </button>

          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(t => t === "light" ? "dark" : "light")}
            aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
          >
{theme === "light" ? "🌙" : "☀️"}
          </button>

          <CartIcon />

          {langOpen && (
            <div className="lang-dropdown">
              {languages.map(({ code, name, flag }) => (
                <button
                  key={code}
                  className={`lang-option ${lang === code ? 'selected' : ''}`}
                  onClick={() => {
                    setLang(code);
                    setLangOpen(false);
                  }}
                >
                <img src={flag} alt="" className="flag-img" width="22" height="22" />
                  <span>{code.toUpperCase()}</span>
                  <span className="lang-name">{name}</span>
                </button>
              ))}
            </div>
          )}

          <button
            type="button"
            className={`nav-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(c => !c)}
            aria-expanded={menuOpen}
            aria-controls="app-navigation"
          >
            <span /><span /><span />
            <span className="sr-only">Menu</span>
          </button>
        </div>

        <nav
          id="app-navigation"
          className={`app-nav ${menuOpen ? "open" : ""}`}
        >
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        <div className="footer-left">
          <NavLink to="/contact" className="footer-contact">
            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Contact
          </NavLink>
        </div>
        <div className="footer-copy">Copyright © 2026 flex-paris. All rights reserved.</div>
        <div className="footer-right">
          <a className="social-link" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a className="social-link" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a className="social-link" href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
