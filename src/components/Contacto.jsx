import './Contacto.css'

export default function Contacto() {
  const year = new Date().getFullYear()

  return (
    <>
      <section id="contacto" className="contacto">
        <div className="contacto__inner">
          <div className="contacto__left">
            <div className="section-label">Contáctanos</div>
            <h2 className="contacto__title">
              Estamos para <em>ayudarte</em>
            </h2>
            <p className="contacto__text">
              ¿Tienes dudas sobre algún producto? ¿Quieres hacer un pedido o cotizar al mayoreo?
              Comunícate con nosotros por el canal que prefieras.
            </p>

            <div className="contacto__channels">
              <a
                href="mailto:contacto@ssl.com.mx"
                className="channel-item"
              >
                <div className="channel-icon channel-icon--email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                </div>
                <div>
                  <strong>Correo Electrónico</strong>
                  <span>contacto@ssl.com.mx</span>
                </div>
              </a>

              <a
                href="https://wa.me/5215512345678"
                target="_blank"
                rel="noreferrer"
                className="channel-item"
              >
                <div className="channel-icon channel-icon--wa">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <strong>WhatsApp</strong>
                  <span>+52 55 1234 5678</span>
                </div>
              </a>

              <a
                href="tel:+5215512345678"
                className="channel-item"
              >
                <div className="channel-icon channel-icon--phone">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.2 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <strong>Teléfono</strong>
                  <span>+52 55 1234 5678</span>
                </div>
              </a>

              <div className="channel-item channel-item--location">
                <div className="channel-icon channel-icon--location">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <strong>Ubicación</strong>
                  <span>CDMX, México · Envíos a todo el país</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contacto__right">
            <div className="contacto__deco">
              <div className="contacto__deco-bubble contacto__deco-bubble--1" />
              <div className="contacto__deco-bubble contacto__deco-bubble--2" />
              <div className="contacto__deco-bubble contacto__deco-bubble--3" />
              <div className="contacto__schedule">
                <h3>Horario de Atención</h3>
                <div className="schedule-row">
                  <span>Lunes — Viernes</span>
                  <strong>8:00 — 18:00</strong>
                </div>
                <div className="schedule-row">
                  <span>Sábados</span>
                  <strong>9:00 — 14:00</strong>
                </div>
                <div className="schedule-row schedule-row--closed">
                  <span>Domingos</span>
                  <strong>Cerrado</strong>
                </div>
                <div className="schedule-note">
                  <span>🤖</span>
                  Nuestro chat está disponible las 24 horas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span className="footer__name">SSL — Soluciones de Limpieza</span>
        <span className="footer__sep">·</span>
        <span className="footer__year">© {year}</span>
      </footer>
    </>
  )
}
