import Header from './components/Header'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Catalogo from './components/Catalogo'
import Contacto from './components/Contacto'
import Chatbot from './components/Chatbot'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <Catalogo />
        <Contacto />
      </main>
      <Chatbot />
    </>
  )
}
