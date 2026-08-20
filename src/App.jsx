import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Instagram from './components/Instagram'
import HoursLocation from './components/HoursLocation'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Instagram />
        <HoursLocation />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
