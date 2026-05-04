import { useState, useRef, useEffect } from 'react'
import './Chatbot.css'

const INITIAL_MESSAGES = [
  {
    role: 'assistant',
    text: '¡Hola! 👋 Soy **Sumi**, tu asistente virtual de SSL. Estoy aquí para ayudarte a encontrar el producto de limpieza perfecto para ti. ¿En qué puedo ayudarte hoy?',
    time: new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }),
  },
]

const QUICK_REPLIES = [
  '¿Qué productos tienen?',
  '¿Hacen envíos?',
  '¿Cómo cotizo al mayoreo?',
]

const BOT_RESPONSES = {
  productos: 'Tenemos más de 200 productos en 8 categorías: detergentes, desinfectantes, desengrasantes, aromatizantes, limpiavidrios, línea hospitalaria, biodegradables e industrial. ¿Qué categoría te interesa?',
  envío: '¡Claro que sí! Hacemos envíos a toda la república mexicana. Los pedidos se procesan en 24 horas y el tiempo de entrega es de 2 a 5 días hábiles dependiendo tu ubicación.',
  mayoreo: 'Para cotizaciones al mayoreo, puedes contactarnos por WhatsApp al +52 55 1234 5678 o por correo a contacto@ssl.com.mx. Tenemos precios especiales para volúmenes mayores a 12 piezas.',
  default: 'Entendido. Para esa consulta específica, te recomiendo contactar directamente a nuestro equipo por WhatsApp (+52 55 1234 5678) o correo (contacto@ssl.com.mx). ¿Puedo ayudarte con algo más?',
}

function getResponse(text) {
  const t = text.toLowerCase()
  if (t.includes('producto') || t.includes('tienen') || t.includes('catálogo') || t.includes('catalogo')) {
    return BOT_RESPONSES.productos
  }
  if (t.includes('envío') || t.includes('envio') || t.includes('enví') || t.includes('entreg')) {
    return BOT_RESPONSES.envío
  }
  if (t.includes('mayor') || t.includes('cotiz') || t.includes('precio')) {
    return BOT_RESPONSES.mayoreo
  }
  return BOT_RESPONSES.default
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, open, typing])

  const sendMessage = (text) => {
    if (!text.trim()) return
    const time = new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })

    setMessages((m) => [...m, { role: 'user', text, time }])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, {
        role: 'assistant',
        text: getResponse(text),
        time: new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }),
      }])
    }, 1200 + Math.random() * 600)
  }

  const formatText = (text) =>
    text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')

  return (
    <div className={`chatbot ${open ? 'chatbot--open' : ''}`}>
      {/* Trigger button */}
      <button
        className="chatbot__trigger"
        onClick={() => setOpen(!open)}
        aria-label="Abrir chat"
      >
        <div className="chatbot__soap">
          <div className="chatbot__soap-body">
            <div className="chatbot__soap-shine" />
            <div className="chatbot__soap-face">
              {open ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <>
                  <div className="chatbot__soap-eye" />
                  <div className="chatbot__soap-eye" />
                  <div className="chatbot__soap-smile" />
                </>
              )}
            </div>
            <div className="chatbot__soap-bubbles">
              <div className="soap-b soap-b--1" />
              <div className="soap-b soap-b--2" />
              <div className="soap-b soap-b--3" />
            </div>
          </div>
        </div>
        {!open && <div className="chatbot__badge">1</div>}
      </button>

      {/* Chat window */}
      <div className="chatbot__window">
        <div className="chatbot__header">
          <div className="chatbot__avatar">
            <div className="chatbot__avatar-bubble">
              <div className="chatbot__avatar-eye" />
              <div className="chatbot__avatar-eye" />
              <div className="chatbot__avatar-smile" />
            </div>
          </div>
          <div>
            <div className="chatbot__name">Sumi</div>
            <div className="chatbot__status">
              <span className="chatbot__status-dot" />
              En línea — SSL Asistente
            </div>
          </div>
        </div>

        <div className="chatbot__messages">
          {messages.map((m, i) => (
            <div key={i} className={`chatbot__msg chatbot__msg--${m.role}`}>
              {m.role === 'assistant' && (
                <div className="chatbot__msg-avatar">S</div>
              )}
              <div className="chatbot__msg-content">
                <div
                  className="chatbot__msg-bubble"
                  dangerouslySetInnerHTML={{ __html: formatText(m.text) }}
                />
                <div className="chatbot__msg-time">{m.time}</div>
              </div>
            </div>
          ))}

          {typing && (
            <div className="chatbot__msg chatbot__msg--assistant">
              <div className="chatbot__msg-avatar">S</div>
              <div className="chatbot__typing">
                <div className="chatbot__typing-dot" />
                <div className="chatbot__typing-dot" />
                <div className="chatbot__typing-dot" />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {messages.length <= 2 && !typing && (
          <div className="chatbot__quick">
            {QUICK_REPLIES.map((r, i) => (
              <button key={i} className="quick-reply" onClick={() => sendMessage(r)}>
                {r}
              </button>
            ))}
          </div>
        )}

        <div className="chatbot__input-area">
          <input
            className="chatbot__input"
            type="text"
            placeholder="Escribe tu pregunta..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
          />
          <button
            className="chatbot__send"
            onClick={() => sendMessage(input)}
            disabled={!input.trim()}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
