import './Catalogo.css'

const categorias = [
  {
    emoji: '🧴',
    nombre: 'Detergentes',
    descripcion: 'Líquidos y en polvo para toda superficie',
    color: '#2563eb',
    count: '40+ productos',
  },
  {
    emoji: '🦠',
    nombre: 'Desinfectantes',
    descripcion: 'Eliminación de bacterias y virus',
    color: '#06b6d4',
    count: '30+ productos',
  },
  {
    emoji: '⚙️',
    nombre: 'Desengrasantes',
    descripcion: 'Para cocinas e industria pesada',
    color: '#0ea5e9',
    count: '25+ productos',
  },
  {
    emoji: '🌸',
    nombre: 'Aromatizantes',
    descripcion: 'Fragancias duraderas y naturales',
    color: '#8b5cf6',
    count: '35+ productos',
  },
  {
    emoji: '🪟',
    nombre: 'Limpiavidrios',
    descripcion: 'Cristales sin rayas ni residuos',
    color: '#14b8a6',
    count: '15+ productos',
  },
  {
    emoji: '🏥',
    nombre: 'Línea Hospitalaria',
    descripcion: 'Certificados para uso médico',
    color: '#ef4444',
    count: '20+ productos',
  },
  {
    emoji: '🌿',
    nombre: 'Biodegradables',
    descripcion: 'Fórmulas ecológicas y sostenibles',
    color: '#22c55e',
    count: '18+ productos',
  },
  {
    emoji: '🏭',
    nombre: 'Industrial',
    descripcion: 'Soluciones para manufactura y proceso',
    color: '#f59e0b',
    count: '28+ productos',
  },
]

export default function Catalogo() {
  return (
    <section id="catalogo" className="catalogo">
      <div className="catalogo__inner">
        <div className="catalogo__header">
          <div className="section-label section-label--dark">Nuestro Catálogo</div>
          <h2 className="catalogo__title">
            Soluciones para <em>cada</em> necesidad
          </h2>
          <p className="catalogo__subtitle">
            Explora nuestras categorías de productos, diseñadas para distintos entornos y usos.
          </p>
        </div>

        <div className="catalogo__grid">
          {categorias.map((cat, i) => (
            <div
              key={i}
              className="cat-card"
              style={{ '--cat-color': cat.color, animationDelay: `${i * 0.07}s` }}
            >
              <div className="cat-card__glow" />
              <div className="cat-card__emoji">{cat.emoji}</div>
              <div className="cat-card__info">
                <h3 className="cat-card__name">{cat.nombre}</h3>
                <p className="cat-card__desc">{cat.descripcion}</p>
              </div>
              <span className="cat-card__count">{cat.count}</span>
            </div>
          ))}
        </div>

        <div className="catalogo__footer">
          <div className="catalogo__footer-line" />
          <a href="#" className="catalogo__link" onClick={(e) => e.preventDefault()}>
            Ver catálogo completo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <div className="catalogo__footer-line" />
        </div>
      </div>
    </section>
  )
}
