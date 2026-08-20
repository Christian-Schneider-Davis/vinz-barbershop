import { useEffect, useState } from 'react'
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import { business, whatsappLink } from '../data/businessInfo'
import { useLanguage } from '../context/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  const links = [
    { href: '#servicios', label: t.nav.services },
    { href: '#nosotros', label: t.nav.about },
    { href: '#instagram', label: t.nav.instagram },
    { href: '#horario', label: t.nav.hours },
  ]

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__brand-name">{business.name}</span>
        </a>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink(t.hero.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp navbar__cta"
            onClick={closeMenu}
          >
            <FaWhatsapp size={18} />
            {t.nav.cta}
          </a>
        </nav>

        <div className="navbar__right">
          <LanguageToggle />

          <button
            className="navbar__toggle"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
