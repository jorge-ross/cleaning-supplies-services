import { useState, useEffect } from 'react'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <div className="header__logo" onClick={() => scrollTo('hero')}>
          <div className="logo-bubble">
            <span className="logo-bubble__shine" />
            <span className="logo-text">SSL</span>
          </div>
          <div className="logo-wordmark">
            <span className="logo-wordmark__main">SSL</span>
            <span className="logo-wordmark__sub">Soluciones de Limpieza</span>
          </div>
        </div>

        <button
          className={`header__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <button onClick={() => scrollTo('nosotros')}>Nosotros</button>
          <button onClick={() => scrollTo('catalogo')}>Catálogo</button>
          <button onClick={() => scrollTo('contacto')} className="nav__cta">Contáctanos</button>
        </nav>
      </div>
    </header>
  )
}
