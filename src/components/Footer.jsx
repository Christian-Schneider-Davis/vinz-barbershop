import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { business, whatsappLink, whatsappLinkSecondary } from '../data/businessInfo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <span className="footer__brand">{business.name}</span>
          <p className="footer__tagline">{business.tagline}</p>
        </div>

        <div className="footer__col">
          <h4>Contacto</h4>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> {business.whatsappDisplayPrimary}
          </a>
          <a href={whatsappLinkSecondary()} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> {business.whatsappDisplaySecondary}
          </a>
          <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer">
            <FaInstagram /> @{business.instagramHandle}
          </a>
        </div>

        <div className="footer__col">
          <h4>Dirección</h4>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              business.address.mapsQuery
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt /> {business.address.line1}, {business.address.line2}
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} {business.name}. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}
