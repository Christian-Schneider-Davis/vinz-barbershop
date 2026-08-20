import { useEffect, useState } from 'react'
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import { business, whatsappLink } from '../data/businessInfo'

const LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#instagram', label: 'Instagram' },
  { href: '#horario', label: 'Horario y ubicación' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__brand-name">{business.name}</span>
        </a>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink('Hola! Me gustaría reservar una cita en Vinz Barber Shop.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp navbar__cta"
            onClick={closeMenu}
          >
            <FaWhatsapp size={18} />
            Reservar cita
          </a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>
    </header>
  )
}
