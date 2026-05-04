import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__bubble hero__bubble--1" />
        <div className="hero__bubble hero__bubble--2" />
        <div className="hero__bubble hero__bubble--3" />
        <div className="hero__bubble hero__bubble--4" />
        <div className="hero__bubble hero__bubble--5" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Productos de Calidad Profesional
        </div>

        <h1 className="hero__title">
          Limpieza que <br />
          <span className="hero__title-accent">transforma</span>
          <br />espacios
        </h1>

        <p className="hero__desc">
          Proveemos soluciones de limpieza para empresas, hogares e industrias.
          Productos certificados, entrega rápida y asesoría especializada.
        </p>

        <div className="hero__actions">
          <button className="btn-primary" onClick={() => scrollTo('catalogo')}>
            Ver Catálogo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('nosotros')}>
            Conoce más
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <strong>+200</strong>
            <span>Productos</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <strong>10+</strong>
            <span>Años de experiencia</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <strong>99%</strong>
            <span>Clientes satisfechos</span>
          </div>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__soap-stack">
          {[
            { color: '#06b6d4', size: 120, x: 0, y: 0, label: 'Desengrasantes' },
            { color: '#2563eb', size: 90, x: 130, y: 40, label: 'Desinfectantes' },
            { color: '#0ea5e9', size: 75, x: 60, y: 130, label: 'Detergentes' },
            { color: '#67e8f9', size: 55, x: 180, y: 130, label: 'Aromatizantes' },
          ].map((b, i) => (
            <div
              key={i}
              className="hero__soap-bubble"
              style={{
                width: b.size,
                height: b.size,
                left: b.x,
                top: b.y,
                background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), ${b.color})`,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              <span className="hero__soap-shine" />
              <span className="hero__soap-label">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-mouse__wheel" />
        </div>
        <span>Desplázate</span>
      </div>
    </section>
  )
}
