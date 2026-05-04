import './Nosotros.css'

const valores = [
  {
    icon: '🏆',
    titulo: 'Calidad Garantizada',
    texto: 'Todos nuestros productos cumplen con estándares de calidad nacionales e internacionales.',
  },
  {
    icon: '🌿',
    titulo: 'Compromiso Ambiental',
    texto: 'Formulaciones biodegradables y empaque sostenible para cuidar el planeta.',
  },
  {
    icon: '🚚',
    titulo: 'Entrega Rápida',
    texto: 'Distribución eficiente a toda la república. Pedidos procesados en 24 horas.',
  },
  {
    icon: '💬',
    titulo: 'Asesoría Especializada',
    texto: 'Nuestro equipo te orienta para elegir el producto ideal según tu necesidad.',
  },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="nosotros__inner">
        <div className="nosotros__left">
          <div className="section-label">Sobre Nosotros</div>
          <h2 className="nosotros__title">
            Más de una <em>década</em> limpiando el mundo
          </h2>
          <p className="nosotros__text">
            SSL nació con la misión de ofrecer productos de limpieza accesibles, efectivos y
            responsables con el medio ambiente. Trabajamos con distribuidores, empresas y
            consumidores finales en todo el país.
          </p>
          <p className="nosotros__text">
            Contamos con un equipo de químicos y especialistas dedicados a formular soluciones
            que realmente funcionan — desde desengrasantes industriales hasta productos de
            cuidado del hogar.
          </p>

          <div className="nosotros__numbers">
            <div className="nosotros__number">
              <strong>2012</strong>
              <span>Año de fundación</span>
            </div>
            <div className="nosotros__number">
              <strong>500+</strong>
              <span>Clientes activos</span>
            </div>
            <div className="nosotros__number">
              <strong>18</strong>
              <span>Estados atendidos</span>
            </div>
          </div>
        </div>

        <div className="nosotros__right">
          <div className="valores-grid">
            {valores.map((v, i) => (
              <div key={i} className="valor-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="valor-card__icon">{v.icon}</div>
                <h3 className="valor-card__title">{v.titulo}</h3>
                <p className="valor-card__text">{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="nosotros__wave">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--off-white)" />
        </svg>
      </div>
    </section>
  )
}
